import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';

// es como el archivo de reseteo

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    --global-bg:#fff;
    --global-bg-card:#fafafa;
    --global-text-color:#313131;
    --global-box-shadow: 0em .5em 1em #00000050;
  }

  body{
    background-color: var(--global-bg);
    color: var(--global-text-const);
    min-height: 100vh;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <App title="React with Tipescript and Styled Component" />
      <GlobalStyle />
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

