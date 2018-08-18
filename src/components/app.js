import React from 'react';

import UserDetail from '../containers/user_detail';
import UserList from '../containers/user_list';

class App extends React.Component {
  render() {
    return (
      <div className="row justify-content-between">
        <UserList />
        <UserDetail />
      </div>
    )
  }
}

export default App
