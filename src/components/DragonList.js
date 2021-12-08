import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';

import reducer, {initialState} from './../reducers/dragonReducer'
import {addMember} from './../actions/dragonActions'

class DragonList extends React.Component {

  state = {
    newMember: '',

  };

  handleChanges = e => {
    console.log("handleChange ", e.target.value)
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = (name)=> {
    
    // this.setState({
    //   ...this.state,
    //   members: [...this.members, {name: newMember, dragonStatus: true}]
    // })
    // this.props.dispatch(addMember(this.state.newMember));
    // this.props.addMember(this.state.newMember)
    this.props.addMember(this.state.newMember)
  }

  render() {
    console.log("DragonList this.props", this.props)
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("DragonList currentState:", state)
  return {
    members: state.dragonReducer.members,
  }
}

// export default DragonList;
// export default connect(mapStateToProps,{})(DragonList);// no dispatch
// export default connect(mapStateToProps,)(DragonList);// have dispatch 
//export default connect(mapStateToProps)(DragonList);// have dispatch

export default connect(mapStateToProps,{addMember})(DragonList);// have dispatch 
