import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Note from "./Note";

export default function NotesGrid({ notes, deleteNote }) {
  return (
    <Container>
      <Row>
        {notes.map((note) => (
          <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto" xxl="auto">
            <Note deleteNote={deleteNote} id={note.id} text={note.text} date={note.date} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
