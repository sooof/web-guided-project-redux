import React from 'react';
import { connect } from 'react-redux';

import { toggleEditing } from './../actions/titleActions';

const TitleDisplay = (props)=> {
  console.log("titleDisplay props: ", props);
  const handleClick = () => {
    props.handleToggleEditing();
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);
}

const mapStateToProps = (state)=> {
  return({
    title: state.title
  });
}

export default connect(mapStateToProps)(TitleDisplay);