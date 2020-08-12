import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <img src={props.src} alt="STI" width="200" style={{ maxHeight: '3.75rem' }} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem className="mr-4">
                        <NavLink to="/" className="navbar-item">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem className="mr-4">
                        <NavLink to="/destination" className="navbar-item">
                            Destination
                        </NavLink>
                    </NavItem>
                    <NavItem className="mr-4">
                        <NavLink to="/dashboard" className="navbar-item">
                            Dashboard
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    <GiHamburgerMenu />
                </NavbarText>
            </Collapse>
        </Navbar>
    );
};

Header.propTypes = {
    /**
      The URL of the Header's image.
      */
    src: PropTypes.string,
};
export default Header;

// <nav className="navbar" role="navigation" aria-label="main navigation">
//     <div className="navbar-brand">
//         <a className="navbar-item" href="https://studytoursindia.com">
//             <img src={props.src} alt="STI" width="200" style={{ maxHeight: '3.75rem' }} />
//         </a>
//         <div id="navbarBasicExample" className="navbar-menu">
//             <div className="navbar-start">
//                 <NavLink to="/" className="navbar-item">
//                     Home
//                 </NavLink>

//                 <NavLink to="/destination" className="navbar-item">
//                     Destination
//                 </NavLink>
//             </div>
//         </div>
//     </div>
// </nav>
