import React, { Component } from 'react';

class UserList extends Component {
  render() {
    return (
      <div className="col-md-4">
        <ul className="list-group">
          {this.props.users.map(user => {
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

export default UserList
