import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    totalTODOs: total,
    completedTODOs: completed,
    loading,
  } = React.useContext(TodoContext);
  let message;

  if (loading) {
    message = "Cargando...";
  } else if (total === 0) {
    message = "No hay tareas pendientes.";
  } else if (total === completed) {
    message = "¡Felicidades, has completado todos los TODOs!";
  } else {
    message = `Has completado ${completed} de ${total} TODOs`;
  }

  return <h1 className="TodoCounter">{message}</h1>;
}

export { TodoCounter };
