import React from 'react';

class NavBarDash extends React.Component {
  render () {
    return (
      <div>
        Nav Bar Dash holder
        
      </div>
    )
  }
}
const navBar = () => (
  <div>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
)

export default NarBarDash;