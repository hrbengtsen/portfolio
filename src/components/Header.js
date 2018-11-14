import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  deleteBookmark(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
        <div>
          <header>
          
          </header>
        </div>
    );
  }
}

export default Header;
