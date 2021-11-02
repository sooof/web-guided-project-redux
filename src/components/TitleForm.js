import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateTitle } from './../actions/titleActions';

const TitleForm = (props) => {
    const [newTitleText, setNewTitleText] = useState();

    const handleChanges = e => {
      setNewTitleText(e.target.value);
    };

    const handleSubmit = ()=> {
      console.log("1. Click is made.");
      props.dispatch(updateTitle(newTitleText));
    }
    
    return(<div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleSubmit}>
            Update title
          </button>
        </div>);
}

export default connect()(TitleForm);