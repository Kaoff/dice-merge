import React, { FC } from "react";
import { StyledDiceHolder } from "./index.style";
import { IDice, IDiceHolder } from "../../models";
import { Dice } from "../Dice";
import { useDrop, DragObjectWithType } from "react-dnd";

interface IDiceHolderProps {
    holderId: number;
    holder: IDiceHolder;
    animate: boolean;
    onDrop: (item: DragObjectWithType & { dice: IDice }) => void;
}

export const DiceHolder: FC<IDiceHolderProps> = ({ holder, animate, onDrop, holderId }) => {

    const [,drop] = useDrop<DragObjectWithType & { dice: IDice }, void, any>({
        accept: 'DICE',
        canDrop: (item) => (
            !holder.dice 
            || (
                holder.dice.currentValue === item.dice.currentValue 
                && holder.dice.multiplier === item.dice.multiplier
                && item.dice.multiplier < 64
            )
        ),
        drop: (item) => {
            onDrop(item);
        }
    });

    return (
        <StyledDiceHolder className={animate && holder.dice ? 'animated tada' : ''} ref={drop}>
            {
                holder.dice ? (
                    <Dice holderId={holderId} dice={holder.dice} animate={animate} />
                ) : ''
            }
        </StyledDiceHolder>
    )
};