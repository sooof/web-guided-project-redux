import React from 'react';
import { connect } from 'react-redux';

const TitleDisplay = (props)=> {
  const {title, handleToggleEditing} = props
  const handleClick = () => {
    handleToggleEditing();
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
export default connect(mapStateToProps, {})(TitleDisplay);