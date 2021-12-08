import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  updateTitle} from './../actions/titleActions';
const TitleForm = (props) => {
    const [newTitleText, setNewTitleText] = useState();
    const {updateTitle} = props

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    const handleSubmit = ()=> {
        // props.handleTitleUpdate(newTitleText);
        props.updateTitle(newTitleText)
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

// export default TitleForm;
export default connect(null,{updateTitle})(TitleForm);