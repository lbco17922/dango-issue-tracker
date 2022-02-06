import logo from '../images/dango-logo.png';
import '../App.css';
import React from 'react';
import DeveloperLoginTab from './DeveloperLoginTab.jsx';
import LogoutTab from './LogoutTab.jsx';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText
} from 'reactstrap';

function NavBar(props) {
    return(
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand className="brandName">
                <img src={logo} alt="Dango Logo" className="dangologo"/>
                Dango
                </NavbarBrand>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                    {props.isDeveloper ? 
                    <LogoutTab changeStatus={props.changeStatus}/> : 
                    <DeveloperLoginTab changeStatus={props.changeStatus}/>
                    }
                    </Nav>
                    <NavbarText>
                        Dango Issue Tracking
                    </NavbarText>
            </Navbar>
        </div>
    );
}

export default NavBar;