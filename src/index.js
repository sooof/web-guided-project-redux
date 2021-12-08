import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import MovieList from "./components/MovieList"

import './styles.css';


function reducer () {
  return {
     user: {
       name: 'Dustin'
     },
  }
}


function App(props) {
  console.log(store)
  return (
    <div className="App">
      <h1>Hello Code</h1>
      {/* <h2> {store.title} </h2> */}
      <MovieList/>
      <h2>Start editing to see some magic happen!!!</h2>
    </div>
  );  
}
const store = createStore(reducer)
console.log(store)
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>  
  , rootElement);
