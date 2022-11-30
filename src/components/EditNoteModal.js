import Modal from "react-bootstrap/Modal";
import NoteForm from "./NoteForm";

export default function EditNoteModal({
  currentNote,
  addNote,
  showEditNoteModal,
  setShowEditNoteModal,
}) {
  const handleClose = () => setShowEditNoteModal(false);

  return (
    <>
      <Modal size="sm" show={showEditNoteModal} onHide={handleClose} centered>
        <NoteForm currentNote={currentNote} addNote={addNote} />
      </Modal>
    </>
  );
}
