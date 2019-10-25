import styled from "styled-components";
import { StyledDiceHolder } from "../DiceHolder/index.style";

export const StyledDiceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 632px;
    padding: 15px;
    background-color: #1abc9c;
    box-sizing: border-box;
    border-radius: 12px 12px 0 0;

    ${StyledDiceHolder} {
        margin: 10px;
    }
`;

export const StyledDiceContainerButtons = styled.div`
    display: flex;
    height: 50px;
    max-width: 632px;

    button {
        border: none;
        background-color: #34495e;
        color: white;
        font-size: 18px;
        height: 100%;
        width: 50%;

        transition: background-color 0.3s ease;
        
        &:disabled {
            background-color: #7f8c8d;
        }

        &:hover:not(:disabled) {
            background-color: #2c3e50;
        }

        &:first-child {
            border-right: solid 1px white;
            border-radius: 0 0 0 12px;
        }

        &:last-child {
            border-radius: 0 0 12px 0;
        }
    }
`;

export const StyledDiceContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;