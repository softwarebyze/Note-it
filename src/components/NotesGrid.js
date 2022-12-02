import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./Note";
import EditNoteModal from "./EditNoteModal";
import { useState } from "react";
import DeleteNoteModal from "./DeleteNoteModal";
import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function NotesGrid({
  notes,
  currentNote,
  editNote,
  setCurrentNote,
  deleteNote,
}) {
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);
  const [showDeleteNoteModal, setShowDeleteNoteModal] = useState(false);
  const [parent] = useAutoAnimate()
  return (
    <>
      <Container>
        <Row ref={parent} className="g-4 mb-5" xs={1} md={2} lg={3} xl={4}>
          {notes.map((note) => (
            <Col key={note.id}>
              <Note
                deleteNote={deleteNote}
                note={note}
                setCurrentNote={setCurrentNote}
                setShowEditNoteModal={setShowEditNoteModal}
                setShowDeleteNoteModal={setShowDeleteNoteModal}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <EditNoteModal
        editNote={editNote}
        setCurrentNote={setCurrentNote}
        currentNote={currentNote}
        setShowEditNoteModal={setShowEditNoteModal}
        showEditNoteModal={showEditNoteModal}
      />
      <DeleteNoteModal
        showDeleteNoteModal={showDeleteNoteModal}
        setShowDeleteNoteModal={setShowDeleteNoteModal}
        deleteNote={deleteNote}
        setCurrentNote={setCurrentNote}
        currentNote={currentNote}
      />
    </>
  );
}
