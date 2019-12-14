import React from 'react';

class AccountDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false, 
    }
    this.toggleList = this.toggleList.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  handleClickOutside() {
    this.setState({ 
      listOpen: false
    })
  }

  render() {
    const list = this.props.list;
    const title = this.props.title;
    const {listOpen} = this.state;
    return (
      <div className="account-dd-wrapper">
        <div className="account-dd-header" onClick={this.toggleList}>
          <div className="account-dd-title">
            {title}
          </div>
        </div>


        {listOpen && 
          <ul className="account-dd-content">
            {list.map(listItem => (
              <li key={listItem.id}>
                {listItem.label}
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default AccountDropdown;


