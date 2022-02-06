import React from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col
} from 'reactstrap';
import IssueCardModal from './IssueCardModal.jsx';

function IssueCard(props) {
  const [modalState, setModalState] = React.useState(false);
  const [devNotes, setDevNotes] = React.useState("");

  function toggleModal() {
    Axios.get(`https://dango-issue-tracker.herokuapp.com/getDevNotes?ticketID=${props.ticketID}`)
      .then(devNotes => setDevNotes(devNotes.data));
    setModalState(prev => !prev);
  }

    return (
        <Col>
          <Card
          color="dark"
          outline
          body
          className="mb-2 mt-2 h-100"
          >
          <CardBody>
            <CardTitle tag="h5">
              {props.bugName}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Ticket ID: {props.ticketID}
            </CardSubtitle>
            <CardText>
              {props.bugDesc.substring(0,29)}...
            </CardText>
            <Button
            outline
            onClick={toggleModal}
            >
              More Details
            </Button>
            <IssueCardModal
              bugName={props.bugName}
              bugDesc={props.bugDesc}
              ticketID={props.ticketID}
              devNotes={devNotes}
              modalState={modalState}
              setModalState={setModalState}
              toggleModal={toggleModal}
              setDevNotes={setDevNotes}
            />
            <Button
            color="success"
            id={props.ticketID}
            onClick={props.deleteCard}
            >
              Complete
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
}

export default IssueCard;
