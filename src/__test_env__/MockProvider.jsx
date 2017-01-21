import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../store';

const MockProvider = ({ children }) => (
  <Provider store={createStore()}>{children}</Provider>
);

export default MockProvider;
