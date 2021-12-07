import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import './styles.css';
const initialState = {
  title : "hi frome the Redux store!"
}
function reducer () {
  return {
    state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("App ",state)
  return (
    <div className="App">
      <h1>Hello Code</h1>
      <h2> {state.title} </h2>
      <h2>Start editing to see some magic happen!!!</h2>
    </div>
  );  
}
// const store = createStore(reducer)s
// console.log(store)
const rootElement = document.getElementById('root');
ReactDOM.render(
  // <Provider store={store}>
    <App /> 
  // </Provider>  
  , rootElement);
