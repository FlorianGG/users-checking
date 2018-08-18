import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.myUsers.map(user => {
            return (
              <li key={user.id} className="list-group-item">
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
    myUsers :state.users
  }
}
export default connect(mapStateToProps)(UserList)
