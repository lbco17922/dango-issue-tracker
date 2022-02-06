import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert,
    Container,
    Popover,
    PopoverHeader,
    PopoverBody
} from 'reactstrap';

function UserPage() {

    const [bugName, setBugName] = React.useState("");
    const [bugDesc, setBugDesc] = React.useState("");
    const [alertShow, setAlertShow] = React.useState(false);
    const [popOverState, setPopOverState] = React.useState(false);

    async function sendSubmission() {
        if(bugName !== "" && bugDesc !== "") {
            console.log("Issue sent to server");
            setAlertShow(true);
            await Axios.post("https://dango-issue-tracker.herokuapp.com/createIssue", {ticketID: uuidv4().substring(0, 10), bugName: bugName, bugDesc: bugDesc, devNotes: ""});
        } else {
            togglePopOver();
            setTimeout(togglePopOver, 2000);
        }
        setBugName("");
        setBugDesc("");
        setTimeout(() => {
            setAlertShow(false);
        }, 2500);
    }

    function togglePopOver() {
        setPopOverState(prev => !prev);
    }
    
    return (
        <div>
            <Container>
                <h1 className="mt-5">We're sorry you're experiencing issues with our product :( </h1>
                <h3>Please give us more details and we'll fix it as soon as possible!</h3>
                <p>- The Dango Team</p>
                <Form inline>
                    <FormGroup>
                        <Label for="issueTitle" size="lg">Issue Title</Label>
                        <Input 
                            id="issueTitle"
                            name="title"
                            placeholder="A title for your current issue...(Limit 25 Characters)"
                            bsSize="lg"
                            className="mb-3"
                            onChange={(event) => setBugName(event.target.value)}
                            maxLength="25"
                            required
                            value={bugName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="issueDesc" size="md">Issue Description</Label>
                        <Input
                            id="issueDesc"
                            name="description"
                            placeholder="An in-depth description to help our developers better understand your issue..."
                            type="textarea"
                            bsSize="md"
                            className="mb-3"
                            onChange={(event) => setBugDesc(event.target.value)}
                            required
                            value={bugDesc}
                        />
                    </FormGroup>
                    <Button onClick={sendSubmission} id="sendSubmissionButton">
                        Submit To Our Team!
                    </Button>
                    <Popover
                        flip
                        target="sendSubmissionButton"
                        isOpen={popOverState}
                    >
                        <PopoverHeader>
                            Error!
                        </PopoverHeader>
                        <PopoverBody>
                            Your issue MUST have a title and description.
                        </PopoverBody>
                    </Popover>
                    <Alert isOpen={alertShow} variant="success">
                        <p>Thanks :) Our developers will get right on it!</p>
                    </Alert>
                </Form>
            </Container>
        </div>
    );
}

export default UserPage;