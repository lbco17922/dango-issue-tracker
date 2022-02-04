import logo from '../images/dango-logo.png';
import '../App.css';
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    NavbarText,
    Popover,
    PopoverBody,
    PopoverHeader,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

function NavBar(props) {

    const [popOverState, setPopOverState] = React.useState(false);

    function togglePopOver() {
        props.changeStatus();
        setPopOverState(prev => !prev);
    }

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
                        <NavItem>
                            <Button
                                id="popover01"
                                type="button"
                                onClick={() => setPopOverState((prev) => !prev)}
                                className={props.isDeveloper ? "invisible" : "visible"}
                            >
                                I'm a developer!
                            </Button>
                            <Popover
                                flip
                                placement="bottom"
                                target="popover01"
                                isOpen={popOverState}
                            >
                                <PopoverHeader>
                                    Developer Login
                                </PopoverHeader>
                                <PopoverBody>
                                    <Form>
                                        <FormGroup>
                                            <Label for="devUserName" size="sm">User Name</Label>
                                            <Input 
                                                id="devUserName"
                                                name="devUserName"
                                                placeholder="Username..."
                                                value="DangoDev101"
                                                readOnly
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="devPassWord" size="sm">Password</Label>
                                            <Input 
                                                id="devUserName"
                                                name="devUserName"
                                                type="password"
                                                placeholder="Password..."
                                                value="12345678"
                                                readOnly
                                            />
                                        </FormGroup>
                                        <Button onClick={togglePopOver}
                                        >Login</Button>
                                    </Form>
                                </PopoverBody>
                            </Popover>
                        </NavItem>
                        <NavItem>
                            <Button
                                type="button"
                                onClick={props.changeStatus}
                                className={props.isDeveloper ? "visible" : "invisible"}
                            >
                                Logout
                            </Button>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        Dango Issue Tracking
                    </NavbarText>
            </Navbar>
        </div>
    );
}

export default NavBar;