import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import MovieList from "./components/MovieList"
import reducer from './reducers';

import './styles.css';


// function reducer () {
//   return {
//      user: {
//        name: 'Dustin'
//      },
//      movies : ['Star Wars', 'Lord of the Rings', 'Harry Potter'],
//      todoList: [{task: 'Learn Redux', id: 0, completed: false}],
//      moviesToWatch: 13
//   }
// }


function App(props) {
  // console.log(store)
  return (
    <div className="App">
      <h1>Hello Code</h1>
      {/* <h2> {store.title} </h2> */}
      <MovieList/>
      {/* <h2>Start editing to see some magic happen!!!</h2> */}
    </div>
  );  
}
const store = createStore(reducer)
// console.log(store)
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>  
  , rootElement);
