import React from 'react';
import {
    NavItem,
    Button,
    Popover,
    PopoverBody,
    PopoverHeader,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

function DeveloperLoginTab(props) {
    const [popOverState, setPopOverState] = React.useState(false);

    function togglePopOver() {
        props.changeStatus();
        setPopOverState(prev => !prev);
    }

    return(
    <NavItem>
        <Button
            id="popover01"
            type="button"
            onClick={() => setPopOverState((prev) => !prev)}
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
    );
}

export default DeveloperLoginTab;