import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deletAll, editTodo } from "../features/TodoSlicer";

const TodoForm = ({ open, show, setOpen, setFormData, formData }) => {
  const { todos } = useSelector((state) => state.todolists);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(editTodo(formData));
    console.log(formData);
    setFormData({
      title: "",
      due_date: "",
      status: "",
    });
    handleClose();
  };
  const handleInputChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(formData));
    setFormData({
      title: "",
      due_date: "",
      status: "",
    });
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          {!formData.id ? "Add New Item" : "Update Item"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              name="title"
              label="Title"
              type="text"
              variant="standard"
              fullWidth
              value={formData.title}
              onChange={(e) => handleInputChange(e, "title")}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              name="due_date"
              label="Due-Date"
              type="date"
              variant="standard"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.due_date}
              onChange={(e) => handleInputChange(e, "due_date")}
            />

            <FormControl variant="standard" fullWidth required>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={(e) => handleInputChange(e, "status")}
                label="Status"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions sx={{ marginTop: "10px" }}>
          <Button onClick={handleClose}>Cancel</Button>

          {!formData.id ? (
            <Button type="submit" onClick={handleSubmit}>
              CREATE
            </Button>
          ) : (
            <Button type="submit" onClick={handleUpdate}>
              UPDATE
            </Button>
          )}
        </DialogActions>
      </Dialog>
      {todos.length > 0 && show === true ? (
        <Chip
          label="DELETE ALL"
          color="error"
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 40%",
          }}
          onClick={() => dispatch(deletAll())}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoForm;
