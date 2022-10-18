import styled from "styled-components";

export interface IStyleInput  {
    background: "blue" | "orange" | "grey" | "yellow" 
    color: "blue" | "orange" | "grey" | "yellow"
    width: number
    height: number
}
export const Container = styled.input`
    width: ${({width}:IStyleInput) => `${width}px` };
    height: ${({height}:IStyleInput) => `${height}px`};
    color: ${({color}:IStyleInput)=> `var(--${color})`};
    background: ${({background}:IStyleInput) => `var( --${background})` };
    border-radius: 4px;
    padding: 0px 10px;
    border: none;
    ::placeholder {
        color: var(--grey)
    }
;
`