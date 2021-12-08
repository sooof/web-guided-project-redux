import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  console.log("Title props = ", props)
  
  const {appName, title, editing, toggleEditing, updateTitle} = props
  const [state, dispatch] = useReducer(titleReducer, initialState);

  return (
    <div>
      <h1>{appName}</h1>
      {
        !editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("Movie currentState:", state)
  return {
    appName: state.appName,
    title: state.title,
    editing: state.editing
  }
}

// export default Title;
export default connect(mapStateToProps,{toggleEditing, updateTitle})(Title);
//mapStateToProps: function that gets state as an argument, and return an object that is injected into a component's props
//mapActionsToProps: an object that should hold action creator functions. Functions are injected into props AND automatically dispatch when executed
//component: the component we are injecting props into