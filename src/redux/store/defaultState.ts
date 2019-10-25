import { IState, EDiceAnimation } from "../../models";
import numeral from 'numeral';

export const defaultState: IState = {
    dices: {
        animateDices: false,
        diceHolders: [
            {
                dice: {
                    currentValue: 3,
                    multiplier: 1,
                    animation: EDiceAnimation.None,
                }
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
            {
                dice: null,
            },
        ],
        chips: numeral(0),
    }
}