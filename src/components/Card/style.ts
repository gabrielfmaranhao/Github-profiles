import styled from "styled-components";

export const Container = styled.div`
    width: 294px;
    height: 168px;
    background-color: var(--grey);
    display: flex;
    gap: 20px;
    border-radius: 10px;
    box-shadow: 5px 10px 10px rgba(255, 255, 255, 0.25);
`
export const BoxImgInfo = styled.div`
width: 40%;
display: flex;
flex-direction: column;
`
export const DivImagem = styled.div`
    width: 75px;
    figure {
        width: 100%;
        margin-left: 10px;
        margin-bottom: 0px;
        margin-top: 5px;
        img {
            width: 100%;
            border-radius: 50%;
        }
    }
`
export const DivInfo = styled.div`
display: flex;
flex-direction: column;
gap: 1px;
    h2 {
        font-size: 12px;
        margin: 0px;
        margin-left: 10px;
    }
    p, span {
        font-size: 8px;
        margin: 0px;
        margin-left: 10px;
    }

`
export const Divlink = styled.div`
    h2 {
        text-align: center;
        font-size: 12px;
        margin-bottom: 0px;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding-left: 20px;
        margin: 0px;
    }
    a {
        text-decoration: none;
        font-size: 10px;
    }
`