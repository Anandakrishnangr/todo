import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
  Typography,
  Box,
} from "@mui/material";
import theme from "../config/Theme";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";


const TodoList = () => {
  let taskList = useSelector((state) => state.todo.value.data);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const handleCheckboxChange = (taskId) => {
    const newSelectedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId)
      : [...selectedTasks, taskId];

    setSelectedTasks(newSelectedTasks);
  };

  const handleDelete = () => {
    // Implement delete logic using selectedTasks
    console.log("Delete tasks:", selectedTasks);
    setSelectedTasks([]);
  };

  const handleMarkAsCompleted = () => {
    // Implement mark as completed logic using selectedTasks
    console.log("Mark as completed:", selectedTasks);
    setSelectedTasks([]);
  };

  const handleArchive = () => {
    // Implement archive logic using selectedTasks
    console.log("Archive tasks:", selectedTasks);
    setSelectedTasks([]);
  };

  return (
    <Box >
      {/* <Typography
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "29px",
        }}
      >ToDo List</Typography> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: `${theme.palette.primary.main}5c` }}>
              <TableCell>
                <Checkbox
                  indeterminate={
                    selectedTasks.length > 0 &&
                    selectedTasks.length < taskList.length
                  }
                  checked={selectedTasks.length === taskList.length}
                  onChange={() =>
                    selectedTasks.length === taskList.length
                      ? setSelectedTasks([])
                      : setSelectedTasks(taskList.map((task) => task.id))
                  }
                />
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Created On</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((task) => {
              console.log(task);
              return (
                <TableRow key={task.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedTasks.includes(task.id)}
                      onChange={() => handleCheckboxChange(task.id)}
                    />
                  </TableCell>
                  <TableCell> Task {task.id}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.addedTime.toString()}</TableCell>
                </TableRow>
              );
            })}
            {taskList.length === 0 ? <TableRow sx={{
              height:"600px"
            }}> 
              <TableCell colSpan={'4'}
                sx={{
                  textAlign: "center"
                }} >
                No Data ! Add a task
              </TableCell>
            </TableRow> : ""}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: "16px", gap: "15px", display: "flex" }}>
        <Button
          variant="contained"
          color="secondary"
          //   startIcon={<DeleteIcon />}
          onClick={handleDelete}
          disabled={selectedTasks.length === 0}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          //   startIcon={<DoneIcon />}
          onClick={handleMarkAsCompleted}
          disabled={selectedTasks.length === 0}
        >
          Mark as Completed
        </Button>
        <Button
          variant="contained"
          //   startIcon={<ArchiveIcon />}
          onClick={handleArchive}
          disabled={selectedTasks.length === 0}
        >
          Archive
        </Button>
        <Button
          variant="contained"
          //   startIcon={<ArchiveIcon />}
          onClick={() => {
            setAddModalOpen(true);
          }}
        >
          New Task
        </Button>
        <AddTask open={addModalOpen} setOpen={setAddModalOpen} />
      </Box>
    </Box>
  );
};

export default TodoList;
