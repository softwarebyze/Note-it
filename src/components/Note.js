import { Button, Card } from "react-bootstrap";
import { FaSkullCrossbones } from "react-icons/fa";

export default function Note({
  note,
  setCurrentNote,
  setShowEditNoteModal,
  setShowDeleteNoteModal
}) {
  const { text, date, title, updatedDate } = note;

  const handleNoteClick = () => {
    setCurrentNote(note);
    setShowEditNoteModal(true);
  };
  
  const handleDeleteButtonClick = (e) => {
    setCurrentNote(note)
    setShowDeleteNoteModal(true)
    e.stopPropagation()
  }

  return (
    <Card role="button" onClick={handleNoteClick} className="Note" border="warning">
      <Card.Body>
        <Card.Title className="me-5">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Button
        onClick={handleDeleteButtonClick}
        variant="danger"
        className="ms-auto m-2 pt-0 px-2 rounded-circle"
      >
        <FaSkullCrossbones id="deleteSvg" />
      </Button>
      <Card.Footer className="text-muted">
        <Card.Text>🎂 {date}</Card.Text> 
        {updatedDate !== null ? <Card.Text>✏️ {updatedDate}</Card.Text> : ""}
        </Card.Footer>
    </Card>
  );
}
