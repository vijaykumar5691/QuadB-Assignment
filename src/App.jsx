import { useState } from "react";

import "./App.css";
import { Box, Chip, Typography } from "@mui/material";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    due_date: "",
    status: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box my={4}>
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Todo App
      </Typography>
      <Chip
        label="ADD TODO"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 40%",
        }}
        onClick={handleClickOpen}
      />
      <Chip
        label={show === false ? "VIEW TODO" : "HIDE TODO"}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 40%",
        }}
        onClick={() => setShow(!show)}
      />
      <Todo
        show={show}
        setOpen={setOpen}
        formData={formData}
        setFormData={setFormData}
      />
      <TodoForm
        open={open}
        show={show}
        setOpen={setOpen}
        formData={formData}
        setFormData={setFormData}
      />
    </Box>
  );
}

export default App;
