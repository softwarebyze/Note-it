import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./Note";

export default function NotesGrid({
  notes,
  currentNote,
  addNote,
  setCurrentNote,
  deleteNote,
}) {
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);
  return (
    <Container>
      <Row className="g-4">
        {notes.map((note) => (
          <Col key={note.id} lg="auto" md="auto" sm="auto" xl="auto" xs="auto" xxl="auto">
            <Note deleteNote={deleteNote} id={note.id} title={note.title} text={note.text} date={note.date} />
          </Col>
        ))}
      </Row>
    </Container>
      <EditNoteModal
        addNote={addNote}
        currentNote={currentNote}
        setShowEditNoteModal={setShowEditNoteModal}
        showEditNoteModal={showEditNoteModal}
      />
    </>
  );
}
