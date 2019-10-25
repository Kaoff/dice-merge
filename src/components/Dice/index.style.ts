import styled from "styled-components";
import { IDice } from "../../models";

export const StyledDot = styled.div<{show: boolean, multiplier: IDice['multiplier']}>`
    display: flex;
    align-content: center;
    opacity: ${props => props.show ? 1 : 0};
    width: 20px;
    height: 20px;
    background-color: ${props => {
        switch(props.multiplier) {
            case 1:
                return '#2c3e50';
            case 2:
                return '#2980b9';
            case 4:
                return '#27ae60';
            case 8:
                return '#8e44ad';
            case 16:
                return '#d35400';
            case 32:
                return '#c0392b';
            case 64:
                return 'white';
            default:
                return 'none';
        };
    }};
    border-radius: 100%;
`;

export const StyledDiceRow = styled.div<{multiplier: IDice['multiplier']}>`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex: 1;

    > div {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-around;
    }
`;

export const StyledDice = styled.div<{multiplier: IDice['multiplier']}>`
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${props => {
        switch(props.multiplier) {
            case 1:
                return '#ecf0f1';
            case 2:
                return '#3498db';
            case 4:
                return '#2ecc71';
            case 8:
                return '#9b59b6';
            case 16:
                return '#e67e22';
            case 32:
                return '#e74c3c';
            default:
                return 'none';
        }
    }};
    background-image: ${props => 
        props.multiplier === 64 
        ? 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)'
        : 'none'
    };
    border-image-slice: 1;
    border-radius: 12px;
    padding: 12px;
    box-sizing: border-box;
`;