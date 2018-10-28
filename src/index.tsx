import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';

import { Calculator } from './containers/calculator';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Calculator />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);