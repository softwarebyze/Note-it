import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function NewNoteTextarea() {
  return (
    <>
      <FloatingLabel controlId="floatingTextarea2" label="Your note...">
        <Form.Control as="textarea" style={{ height: "200px" }} />
      </FloatingLabel>
    </>
  );
}

export default NewNoteTextarea;
