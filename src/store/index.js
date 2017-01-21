import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import promiseMiddleware from './promise';

const production = process.env.NODE_ENV === 'production';

const finalApplyMiddleware = applyMiddleware(thunk, promiseMiddleware);

const finalCreateStore = production ? compose(finalApplyMiddleware)(createStore) :
  compose(
    finalApplyMiddleware,
    applyMiddleware(createLogger()),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

export default function (initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers'); // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
