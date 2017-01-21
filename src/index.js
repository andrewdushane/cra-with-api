import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Container from './components/Container';
import store from './store/';
import './styles/index.css';

const App = () => (
  <Provider store={store()}>
    <Container />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
