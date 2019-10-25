import { IState, IDice, IDiceHolder, EDiceAnimation } from '../../models'
import { defaultState } from '../store/defaultState'

export type IDiceDropPayload = { newHolder: number; dice: IDice };
export type IDiceAnimResetPayload = { holderId: number };

export interface IDiceAction {
    type: 'DICE_DROP' 
            | 'DICE_LAUNCH'
            | 'DICE_ADD'
            | 'DICE_ANIM_RESET';
    payload?:
        IDiceDropPayload
            | IDiceAnimResetPayload
            | undefined;
}

const diceDropAction = (state: IState['dices'], payload: IDiceDropPayload) => {
    const { newHolder, dice } = payload;
    const diceHolders = [...state.diceHolders];
    const oldHolder = state.diceHolders.findIndex(dh => dh.dice === dice);

    if (oldHolder === -1)
        return { ...state };
    
    diceHolders[oldHolder].dice = null;

    if (!diceHolders[newHolder].dice)
        dice.animation = EDiceAnimation.Hold;

    if (diceHolders[newHolder].dice) {
        dice.multiplier *= 2;
        dice.animation = EDiceAnimation.Merge;
    }

    diceHolders[newHolder].dice = {...dice};

    return { ...state, diceHolders };
}

const diceLaunchAction = (state: IState['dices']) => {
    const diceHolders = state.diceHolders.map((dh: IDiceHolder) => {
        if (dh.dice) {
            const currentDice = {...dh.dice};
            return {...dh, dice: { ...currentDice, currentValue: Math.floor(Math.random() * 6) + 1 }};
        }

        return {...dh};
    });

    return { ...state, diceHolders };
}

const diceAddAction = (state: IState['dices']) => {
    const diceHolders = [...state.diceHolders];
    const nextEmptyHolder = diceHolders.findIndex(dh => !dh.dice);

    if (nextEmptyHolder === -1)
        return { ...state };
    
    diceHolders[nextEmptyHolder].dice = {
        currentValue: Math.floor(Math.random() * 6) + 1,
        multiplier: 1,
        animation: EDiceAnimation.Spawn,
    };

    return { ...state, diceHolders };
}

const diceAnimReset = (state: IState['dices'], { holderId }: IDiceAnimResetPayload) => {
    const diceHolders = [...state.diceHolders];
    const dice = { ...diceHolders[holderId].dice, animation: EDiceAnimation.None } as IDice;

    diceHolders[holderId] = { ...diceHolders[holderId], dice };

    return { ...state, diceHolders };
}

export const diceReducer = (state: IState['dices'] = defaultState.dices, action: IDiceAction) => {
    switch (action.type) {
        case 'DICE_DROP':
            return diceDropAction(state, action.payload as IDiceDropPayload);
        case 'DICE_LAUNCH':
            return diceLaunchAction(state);
        case 'DICE_ADD':
            return diceAddAction(state);
        case 'DICE_ANIM_RESET':
            return diceAnimReset(state, action.payload as IDiceAnimResetPayload);
        default:
            return {...state};
    }
}