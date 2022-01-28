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

  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 57.6rem;
    background-color: #F0F2F5;
    border-radius: 5px;
    padding: 6.4rem 4.8rem;
    animation: fadeUp .3s forwards;
  }
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`