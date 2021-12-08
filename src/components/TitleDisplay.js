import React from 'react';
import { connect } from 'react-redux';
import {toggleEditing} from './../actions/titleActions'

const TitleDisplay = (props)=> {
  const {title, toggleEditing} = props
  const handleClick = () => {
    // handleToggleEditing();
    toggleEditing()
  }

  return(<h2>
      {title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

// export default TitleDisplay;
export default connect(mapStateToProps, {toggleEditing})(TitleDisplay);