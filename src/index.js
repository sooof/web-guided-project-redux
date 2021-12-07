import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './styles.css';
function reducer () {
  return {
    title : "hi frome the Redux store!"
  }
}
const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <h1>Hello Code</h1>
      <h2>Start editing to see some magic happen!!!</h2>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
