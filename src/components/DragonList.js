import React from 'react';
import DragonMember from './DragonMember';
import { connect } from 'react-redux';

import reducer, {initialState} from './../reducers/dragonReducer'

class DragonList extends React.Component {

  // state = {
  //   newMember: '',
  //   members: [
  //     { name: 'Jojo Zhang', dragonStatus: true },
  //     { name: 'Brandon Harris', dragonStatus: false }
  //   ]
  // };

  handleChanges = e => {
    // this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = ()=> {
    // this.setState({
      // ...this.state,
      // members: [...this.members, {name: newMember, dragonStatus: true}]
    // })
  }

  render() {
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.props.newMember}
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
    newMember: state.newMember,
    members: state.members,
  }
}

// export default DragonList;
export default connect(mapStateToProps)(DragonList);
