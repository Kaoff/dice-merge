import React, { FC, useState } from 'react';
import { IState, IDiceHolder, IDice } from '../../models';
import { useSelector, useDispatch } from 'react-redux';
import { DiceHolder } from '../DiceHolder';
import { IDiceAction } from '../../redux/reducers/diceReducer';
import { StyledDiceContainer, StyledDiceContainerButtons, StyledDiceContainerWrapper } from './index.style';
import { DragObjectWithType } from 'react-dnd';

export const DiceContainer: FC = () => {
    const diceHolders = useSelector<IState, IDiceHolder[]>(state => state.dices.diceHolders);
    const [animate, setAnimate] = useState<boolean>(false);
    const dispatch = useDispatch();

    const animateDice = () => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
            dispatch<IDiceAction>({
                type: 'DICE_LAUNCH'
            });
        }, 1001);
    }

    const addDice = () => {
        dispatch<IDiceAction>({
            type: 'DICE_ADD'
        });
    }

    const onDiceDrop = (item: DragObjectWithType & { dice: IDice }, holderId: number) => {
        dispatch<IDiceAction>({ 
            type: 'DICE_DROP', 
            payload: {
                newHolder: holderId,
                dice: item.dice,
            }
        });
    }

    const onAnimationEnd = (holderId: number) => {
        dispatch<IDiceAction>({
            type: 'DICE_ANIM_RESET',
            payload: {
                holderId,
            }
        })
    }

    return (
        <StyledDiceContainerWrapper>
            <div>
                <StyledDiceContainer>
                    {
                        diceHolders.map((dh, index) => (
                            <DiceHolder 
                                holderId={index}
                                onDrop={item => onDiceDrop(item, index)}
                                key={index}
                                animate={animate}
                                holder={dh}
                            />
                        ))
                    }
                </StyledDiceContainer>
                <StyledDiceContainerButtons>
                    <button disabled={animate} onClick={animateDice}>Launch dices</button>
                    <button disabled={animate} onClick={addDice}>Add dice</button>
                </StyledDiceContainerButtons>
            </div>
        </StyledDiceContainerWrapper>
    );
}