import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './pages/layout';

import './main.scss';

// The values written here can be used by all styled components in the project.
const theme = {
  primaryColor: '#1db954',
  secondaryColor: '#20d660'
}

// This styles Are inherited to all components.
const GlobalStyle = createGlobalStyle`
  body {
    font-family: tryout-regular;
    height: 100vh;
    background-image: linear-gradient(#010347 ,#000114);
    color: white;
    overflow: hidden;
  }
  #root {
    height:100%;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Layout />     
      </Provider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
