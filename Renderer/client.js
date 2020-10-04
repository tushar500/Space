import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../src/redux/configureStore'
import App from '../src/component/App'

// Read the state sent with markup
const state = window.initialData;
// // delete the state from global window object
delete  window.initialData;

// // reproduce the store used to render the page on server
const store = configureStore(state)
// console.log(store.getState());

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#root')
)
// hydrate(
//   <App />,
//   document.querySelector('#root')
// )
