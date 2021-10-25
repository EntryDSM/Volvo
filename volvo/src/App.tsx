import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style/GlobalStyle';
import store from './modules/redux/store';
import RootRouter from './router/RootRouter';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
    </Provider>
  );
}

export default App;
