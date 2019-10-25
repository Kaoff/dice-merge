import { IDiceHolder } from "./IDiceHolder";

interface IDiceState {
    animateDices: boolean;
    diceHolders: IDiceHolder[];
    chips: Numeral;
}

export interface IState {
    dices: IDiceState;
}
