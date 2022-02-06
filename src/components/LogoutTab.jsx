import React from 'react';
import {
    NavItem,
    Button
} from 'reactstrap'

function LogoutTab(props) {
    return(
    <NavItem>
        <Button
            type="button"
            onClick={props.changeStatus}
        >
            Logout
        </Button>
    </NavItem>
    );
}

export default LogoutTab;