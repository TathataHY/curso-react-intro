import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const { v4: uuidv4 } = require("uuid");

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: TODOs,
    saveItem: saveTODOs,
    loading,
    error,
  } = useLocalStorage("TODOs_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTODOs = TODOs.filter((x) => !!x.completed).length;
  const totalTODOs = TODOs.length;

  const searchedTODOs = TODOs.filter((x) => {
    const TODOsText = x.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return TODOsText.includes(searchText);
  });

  const addTODO = (text) => {
    const newTODO = { id: uuidv4(), text: text, completed: false }; // Create a new TODO object
    const updatedTODOs = [...TODOs, newTODO]; // Add the new TODO to the existing list
    saveTODOs(updatedTODOs);
  };

  const completeTODO = (text) => {
    const updatedTODOs = TODOs.map((todo) =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    );
    saveTODOs(updatedTODOs);
  };

  const deleteTODO = (text) => {
    const newTODOs = TODOs.filter((todo) => todo.text !== text);
    saveTODOs(newTODOs);
  };

  return (
    <>
      <TodoContext.Provider
        value={{
          loading,
          error,
          completedTODOs,
          totalTODOs,
          searchValue,
          setSearchValue,
          searchedTODOs,
          addTODO,
          completeTODO,
          deleteTODO,
          openModal,
          setOpenModal,
        }}
      >
        {props.children}
      </TodoContext.Provider>
    </>
  );
}
export { TodoContext, TodoProvider };
