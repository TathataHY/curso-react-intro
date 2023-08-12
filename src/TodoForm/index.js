import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setOpenModal, addTODO } = React.useContext(TodoContext);
  const [newTODOValue, setNewTODOValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTODO(newTODOValue);
    onCancel();
  };

  const onCancel = () => setOpenModal(false);
  const onChange = (event) => setNewTODOValue(event.target.value);

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        onChange={onChange}
        value={newTODOValue}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button
      TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button
      TodoForm-button--add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
