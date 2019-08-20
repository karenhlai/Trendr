import React from 'react';

class FollowingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers().then(
      console.log("All Users Fetched!")
    )
  }

  render () {
    return (
      <div>
        Following Index 
      </div>
    );
  }
};

export default FollowingIndex;