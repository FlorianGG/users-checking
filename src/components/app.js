import React from 'react';

import UserList from '../containers/user_list';


class App extends React.Component {
  render() {
    return (
      <div className="row">
        <UserList />
      </div>
    )
  }
}

export default App
