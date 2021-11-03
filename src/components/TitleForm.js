import React, { useState } from 'react';
import {connect} from  'react-redux'

import {updateTitle} from '../actions/titleActions'

const TitleForm = (props) => {
    const [newTitleText, setNewTitleText] = useState();

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    const handleSubmit = ()=> {
      console.log("1.click is made")
      props.updateTitle(newTitleText);
      // props.dispatch(updateTitle(newTitleText));
      //props.handleTitleUpdate(newTitleText);
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

// const mapActionsToProps = {
//   updateTitle: updateTitle
// }


// export default TitleForm;
// export default connect()(TitleForm);
// export default connect(null, mapActionsToProps)(TitleForm);
export default connect(null, {updateTitle: updateTitle})(TitleForm);