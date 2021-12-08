import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers/titleReducer';
 import reducer from './reducers/dragonReducer';

const store = createStore(reducer);
console.log("App ", store);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Title />
        <DragonList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
