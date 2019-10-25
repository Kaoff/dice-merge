import { IDice } from "../../models";
import React, { FC, useState, useEffect } from "react";
import { StyledDice, StyledDiceRow, StyledDot } from "./index.style";
import { useInterval } from "../../hooks/useInterval";
import { useDrag } from 'react-dnd';

interface IDiceProps {
    dice: IDice;
    animate: boolean;
    onAnimationEnd: () => void;
}

const diceTemplates = [
    [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 1],
        [0, 0, 0],
        [1, 0, 0],
    ],
    [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
    ],
    [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
    ],
    [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
    ],
    [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
    ],
]

export const Dice: FC<IDiceProps> = ({ dice, animate, onAnimationEnd }) => {
    const [animValue, setAnimValue] = useState<number>(1);

    const [,drag] = useDrag({
        item: { type: 'DICE', dice },
    });
    
    useInterval(() => {
        setAnimValue(Math.floor((Math.random() * 6) + 1));
    }, animate ? 50 : null);

    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 501);

        return () => clearTimeout(timer);
    }, [dice.animation, onAnimationEnd])

    return (
        <StyledDice className={`animated ${dice.animation} faster`} ref={drag} multiplier={dice.multiplier}>
            <StyledDiceRow multiplier={dice.multiplier}>
                <div>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][0][0] === 1} multiplier={dice.multiplier}/>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][0][1] === 1} multiplier={dice.multiplier}/>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][0][2] === 1} multiplier={dice.multiplier}/>
                </div>
            </StyledDiceRow>
            <StyledDiceRow multiplier={dice.multiplier}>
                <div>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][1][0] === 1} multiplier={dice.multiplier}/>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][1][1] === 1} multiplier={dice.multiplier}/>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][1][2] === 1} multiplier={dice.multiplier}/>
                </div>
            </StyledDiceRow>
            <StyledDiceRow multiplier={dice.multiplier}>
                <div>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][2][0] === 1} multiplier={dice.multiplier}/>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][2][1] === 1} multiplier={dice.multiplier}/>
                    <StyledDot show={diceTemplates[(animate ? animValue : dice.currentValue) - 1][2][2] === 1} multiplier={dice.multiplier}/>
                </div>
            </StyledDiceRow>
        </StyledDice>
    )
}