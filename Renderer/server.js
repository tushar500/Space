import React from 'react'
import { renderToString } from 'react-dom/server'
import axios from 'axios';
import { Provider } from 'react-redux'
import App from '../src/component/App'
import configureStore from '../src/redux/configureStore'


module.exports = async function render() {
  const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=5`)
  let initialState = {
    isFetching: false,
    apps: res.data
  }
  // Configure the store with the initial state provided
  const store = configureStore(initialState)
//   const store = res.data


  // render the App store static markup ins content variable
  let initialMarkup = renderToString(
    <Provider store={store} >
       <App />
    </Provider> 
  );

  // Get a copy of store data to create the same store on client side 
  const initialData = store.getState()

  return {initialMarkup,initialData};
}
