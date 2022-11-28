import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Note } from "./Note";

export default function NotesGrid({ notes }) {
  return (
    <Container>
      <Row>
        {notes.map((note) => (
          <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto" xxl="auto">
            <Note key={note.key} text={note.text} date={note.date} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
