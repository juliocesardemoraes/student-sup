import "./index.scss";

const ModalAdd = ({ isOpen, onClose, createBook, book }) => {
  const handleSubmit = () => {
    createBook();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h1>Deseja adicionar {book.title}? </h1>
      <div className="modal_buttons">
        <button onClick={() => handleSubmit()}>sim</button>
        <button onClick={() => onClose()}>não</button>
      </div>
    </div>
  );
};

export default ModalAdd;
