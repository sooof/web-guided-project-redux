import React from 'react';
import {connect} from  'react-redux'
import {toggleEditing} from '../actions/titleActions'
const TitleDisplay = (props)=> {
  console.log("TitleDisplay props = ",props)
  const handleClick = () => {
    props.handleToggleEditing();
    // props.handleToggleEditing();
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);
}
const mapStateToProps = (state) => {
  console.log("currentState:", state)
  return ({ 
    title: state.title
  });
}

// export default TitleDisplay;
export default connect(mapStateToProps)(TitleDisplay);