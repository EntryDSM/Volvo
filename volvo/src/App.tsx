import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style/GlobalStyle';
import store from './modules/redux/store';
import RootRouter from './router/RootRouter';
import BrowserBlockProvider from './util/util/browserBlockProvider';

function App() {
  return (
    <BrowserBlockProvider acceptBrowser={['chrome', 'edge']}>
      <Provider store={store}>
        <GlobalStyle />
        <RootRouter />
      </Provider>
    </BrowserBlockProvider>
  );
}

export default App;
