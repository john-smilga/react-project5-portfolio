import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  state = {
    showLinks: false
  };
  handleLinks = () => {
    this.setState({
      showLinks: !this.state.showLinks
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-header">
          <Link to="/" className="navbar-logo">
            john <span className="navbar-title">doe</span>
          </Link>
          <div className="navbar-btn" onClick={this.handleLinks}>
            <i className="fas fa-bars" />
          </div>
        </div>
        <ul
          className={
            this.state.showLinks
              ? `navbar-links show-nav-links`
              : `navbar-links`
          }
        >
          <li>
            <Link to="/about">about</Link>
          </li>

          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/content">content</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
