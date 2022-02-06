import React from 'react';
import Axios from 'axios';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input
} from 'reactstrap';

function IssueCardModal(props) {
    const [editNotesState, setEditNotesState] = React.useState(false);

    async function saveNotes(event) {
        setEditNotesState(prev => !prev);
        await Axios.post(`https://dango-issue-tracker.herokuapp.com/updateDevNotes`, {ticketID: event.target.id, devNotes: props.devNotes});
    }

    return(
        <Modal
        isOpen={props.modalState}
        scrollable
        centered
        size="lg"
      >
        <ModalHeader
          close={
          <Button
            onClick={() => props.setModalState(prev => !prev)}
          >
          X
          </Button>}
        >
          {props.bugName}
        </ModalHeader>
        <ModalBody>
          {props.bugDesc}
          <hr
            className="mb-0 mt-5"
          />
          <p
          className="mt-4 devNotesTitle mb-0"
          >Developer Notes:</p>
          <Input
          className="mb-3 h-50"
          disabled={!editNotesState}
          type="textarea"
          value={props.devNotes}
          onChange={(event) => props.setDevNotes(event.target.value)}
          />
          <Button
          className={!editNotesState ? "visible" : "invisible"}
          onClick={() => setEditNotesState(prev => !prev)}
          >Edit Notes</Button>
          <Button
          className={editNotesState ? "visible" : "invisible"}
          onClick={saveNotes}
          id={props.ticketID}
          >Save Notes</Button>
        </ModalBody>
        <ModalFooter>
          Ticket ID:
          {props.ticketID}
        </ModalFooter>
      </Modal>
    );
}

export default IssueCardModal;