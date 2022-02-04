import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

function IssueCard(props) {
  const [modalState, setModalState] = React.useState(false);

  function toggleModal() {
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
            <Modal
              isOpen={modalState}
              scrollable
              centered
              size="lg"
            >
              <ModalHeader
                close={
                <Button
                  onClick={toggleModal}
                >
                X
                </Button>}
              >
                {props.bugName}
              </ModalHeader>
              <ModalBody>
                {props.bugDesc}
              </ModalBody>
              <ModalFooter>
                Ticket ID:
                {props.ticketID}
              </ModalFooter>
            </Modal>
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
