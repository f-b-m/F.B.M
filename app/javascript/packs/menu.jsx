/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import Body from '../components/Body'

const store = createStore(rootReducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Body />
    </Provider>,
    document.querySelector('#app')
  )
});
