import Modal from "react-bootstrap/Modal";
import NoteForm from "./NoteForm";

export default function EditNoteModal({
  currentNote,
  setCurrentNote,
  addNote,
  editNote,
  showEditNoteModal,
  setShowEditNoteModal,
}) {
  const handleClose = () => {
    setShowEditNoteModal(false);
    setCurrentNote({
      id: null,
      text: "",
      title: "",
    })
  };

  return (
    <>
      <Modal show={showEditNoteModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Note</Modal.Title>
      </Modal.Header>
      <NoteForm currentNote={currentNote} handleClose={handleClose} addNote={addNote} editNote={editNote}/>
      </Modal>
    </>
  );
}
