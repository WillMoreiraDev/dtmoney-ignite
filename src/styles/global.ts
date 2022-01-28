import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E52E4D;
    --shape: #FFFFFF;
    --text-title: #363F5F;
    --text-body: #969CB2;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .container {
    width: 100%;
    max-width: 1150px;
    padding: 0px 15px;
    margin: 0 auto;
  }
`