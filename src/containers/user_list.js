import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectUser } from '../actions';

class UserList extends Component {
  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.myUsers.map(user => {
            return (
              <li
                key={user.id}
                className="list-group-item"
                onClick={() => this.props.selectUser(user)}
              >
                {user.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    myUsers: state.users,
  }
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({ selectUser }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProp
)(UserList)
