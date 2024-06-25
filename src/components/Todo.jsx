import { Chip, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/TodoSlicer";

const Todo = ({ setOpen, show, setFormData }) => {
  const { todos } = useSelector((state) => state.todolists);
  const dispatch = useDispatch();
  const handleEdit = (todo) => {
    setOpen(true);
    setFormData(todo);
  };

  return (
    <>
      {show && (
        <List sx={{ width: "100%" }}>
          {todos.map((todo, index) => {
            return (
              <ListItem divider key={index}>
                <ListItemText
                  primary={todo.title}
                  secondary=<>
                    {todo.due_date}{" "}
                    <Chip
                      label={todo.status}
                      color={todo.status === "Pending" ? "warning" : "success"}
                    />
                  </>
                />
                <Chip
                  label="EDIT"
                  color="primary"
                  sx={{ marginRight: "10px", width: "100px" }}
                  onClick={() => handleEdit(todo)}
                />
                <Chip
                  label="DELETE"
                  color="error"
                  sx={{ marginRight: "10px", width: "100px" }}
                  onClick={() => dispatch(deleteTodo(todo.id))}
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Todo;
