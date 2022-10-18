import styled from "styled-components";

export interface IStyleTitle {
  color: "blue" | "orange" | "grey" | "yellow";
  size: number
}
export const Container = styled.div`
width: 325px;
height: 68px;
display: flex;
justify-content: center;
  h1 {
    font-size: ${({size}:IStyleTitle) => `${size}px`};
    color: ${({color}:IStyleTitle) =>  `var(--${color})`};
    height: 100%;
    margin: 0px;
  }
`
