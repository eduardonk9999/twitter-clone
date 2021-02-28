import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin: 0px;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    min-height: 100%;
  }
  body{
    background: #fff;
    -webkit-font-smooting: antialiased;
  }
  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button{
    cursor: pointer;
  }

`;