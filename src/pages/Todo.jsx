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
} from "@mui/material";
import theme from "../config/Theme";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";

const dummyData = [
  {
    id: 1,
    heading: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    addedTime: "2022-01-01 10:00:00",
  },
  {
    id: 2,
    heading: "Task 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    addedTime: "2022-01-02 12:30:00",
  },
  // Add more dummy data as needed
];

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
    <div>
      <h1>Todo List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: `${theme.palette.primary.main}5c` }}>
              <TableCell>
                <Checkbox
                  indeterminate={
                    selectedTasks.length > 0 &&
                    selectedTasks.length < dummyData.length
                  }
                  checked={selectedTasks.length === dummyData.length}
                  onChange={() =>
                    selectedTasks.length === dummyData.length
                      ? setSelectedTasks([])
                      : setSelectedTasks(dummyData.map((task) => task.id))
                  }
                />
              </TableCell>
              <TableCell>Heading</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Added Time</TableCell>
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
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: "16px", gap: "15px", display: "flex" }}>
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
      </div>
    </div>
  );
};

export default TodoList;
