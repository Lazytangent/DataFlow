import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureStore from '../store';

function render(ui, { initialState, store = configureStore(initialState), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <BrowserRouter><Provider store={store}>{children}</Provider></BrowserRouter>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
