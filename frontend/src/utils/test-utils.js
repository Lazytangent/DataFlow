import { render as rtlRender } from '@testing-library/react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import { rootReducer } from '../store/';

const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk)));

function render(ui, { initialState, store = configureStore(initialState), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
