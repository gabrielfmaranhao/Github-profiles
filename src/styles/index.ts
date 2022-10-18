import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    --orange: #E05400;
    --grey:   #C8D7F9;
    --yellow: #FFD373;
    --blue:   #001D59;
  }
  html,#root {
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
  }
  span{
    display: block;
  }
`
export default Global