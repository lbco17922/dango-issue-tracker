import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import {
    CardGroup,
    Container,
    Row,
} from 'reactstrap';
import IssueCard from './IssueCard.jsx';

function DevPage(props) {

    function deleteIssueCard(event) {
        console.log(event.target.id);
        Axios.delete('https://dango-issue-tracker.herokuapp.com/deleteIssue', {data: {ticketID: event.target.id}});
        props.setListOfIssues(prev => {
            return prev.filter(issue => issue.ticketID !== event.target.id);
        });
    }

    return (
        <div>
            <CardGroup>
                <Container className="mt-5">
                    <Row xs={1} md={2} lg={4}>
                        {props.listOfIssues.map(bug => {
                            return <IssueCard
                                key={bug.ticketID}
                                ticketID = {bug.ticketID}
                                bugName = {bug.bugName}
                                bugDesc = {bug.bugDesc}
                                deleteCard = {deleteIssueCard}
                            />
                        })}
                    </Row>
                </Container>
            </CardGroup>
        </div>
    );
}

export default DevPage;