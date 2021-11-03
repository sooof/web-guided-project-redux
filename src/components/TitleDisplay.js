import React from 'react';
import {connect} from  'react-redux'
import {toggleEditing} from '../actions/titleActions'

const TitleDisplay = (props)=> {
  console.log("TitleDisplay props = ",props)
  const handleClick = () => {
    // props.dispatch(toggleEditing());
    // props.handleToggleEditing();
    props.toggleEditing()
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
  console.log("currentState:", state.dragon)
  return ({ 
    title: state.title
  });
}
const mapActionsToProps = {
  toggleEditing:toggleEditing
}

// export default TitleDisplay;
//export default connect(mapStateToProps)(TitleDisplay);
export default connect(mapStateToProps, mapActionsToProps)(TitleDisplay);