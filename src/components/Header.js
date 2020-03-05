import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://studytoursindia.com">
            <img
              src={props.src}
              alt="STI"
              width="200"
              style={{maxHeight: '3.75rem'}}
            />
          </a>
          <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a to="/" className="navbar-item">
              Home
            </a>
      
            <a to="/destination" className="navbar-item">
              Documentation
            </a>
            </div></div>
        </div>
      </nav>
    </div>
  );
};
Header.propTypes = {
 
    /**
      The URL of the Header's image.
      */
    src: PropTypes.string,

  };
export default Header;
