import React from 'react';
import NavbarDash from './navbar_dash';
import CreateBar from './create_bar';
import PostIndexContainer from '../posts/post_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div>
        <NavbarDash />

        <div className="dashboard-main">
          <CreateBar />
          <PostIndexContainer />
        </div>
      </div>
    );
  };
}

export default Dashboard;