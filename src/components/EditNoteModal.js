import Modal from "react-bootstrap/Modal";
import NewNoteForm from "./NewNoteForm";

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
          <NewNoteForm currentNote={currentNote} addNote={addNote}/>
      </Modal>
    </>
  );
}
