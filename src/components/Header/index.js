import './header.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Header extends Component {
  render() {
    return (
      <header className="td_header">
        <h2>TODO</h2>
      </header>
    )
  }
}

export default connect()(Header);



