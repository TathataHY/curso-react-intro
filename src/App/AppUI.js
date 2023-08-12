import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodo } from "../EmptyTodo";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const { loading, error, searchedTODOs, completeTODO, deleteTODO, openModal } =
    React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        )}
        {error && <TodoError />}
        {!loading && searchedTODOs.length === 0 && <EmptyTodo />}
        {searchedTODOs.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.id}
            onComplete={() => completeTODO(todo.text)}
            onDelete={() => deleteTODO(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
