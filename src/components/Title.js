import React, { useState, useReducer } from 'react';
import {connect} from  'react-redux'

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  console.log("Title props = ",props)
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    props.dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    props.dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay  title={props.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("currentState:", state)
  return ({
    appName: state.appName,
    editing: state.editing,
  });
}
// const mapStateToProps = (state) => {
//   console.log("currentState:", state)
//   return ({
//     newPop1: "Warren",
//     newPop2: "Longmire"
//   });
// }
export default connect(mapStateToProps)(Title);
// export default connect(mapStateToProps, mapActionsToProps)(Title);
// mapStateToProps : a function that gets the current state and injects into the props of our component anything returned.
// mapActionsToProps : an object that contains action creator functions and injects those functions into props. Any function executed here is AUTOMATICALLY DISPATCHED.
// component : the component we are injecting props into.
