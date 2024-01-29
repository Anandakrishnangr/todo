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
  IconButton,
} from "@mui/material";
import theme from "../config/Theme";
import AddTask from "./AddTask";
import { useSelector, useDispatch } from "react-redux";
import { Edit } from "@mui/icons-material";
import { deleteTask, markAsCompletedTask } from "../redux/Todo/todoSlice";
import moment from "moment";

const TodoList = () => {
  let taskList = useSelector((state) => state.todo);
  console.log(taskList)
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const handleCheckboxChange = (taskId) => {
    const newSelectedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId)
      : [...selectedTasks, taskId];

    setSelectedTasks(newSelectedTasks);
  };
  const [selectedId, setSelectedId] = useState("");
  let dispatch = useDispatch();

  const handleDelete = () => {
    // Implement delete logic using selectedTasks
    console.log("Delete tasks:", selectedTasks);
    dispatch(deleteTask(selectedTasks));
    setSelectedTasks([]);
  };

  const handleMarkAsCompleted = () => {
    // Implement mark as completed logic using selectedTasks
    console.log("Mark as completed:", selectedTasks);
    let updatedTasks = taskList.map((elem) => {
      console.log(selectedTasks,elem.id)
      console.log(selectedTasks.find((el) => el == elem.id))
      if (selectedTasks.find((el) => el == elem.id)) {
        return { ...elem, status: "completed" }
      }else{
        return { ...elem }
      }
    })
    console.log(updatedTasks)
    dispatch(markAsCompletedTask(updatedTasks));
    setSelectedTasks([]);
  };

  const handleArchive = () => {
    // Implement archive logic using selectedTasks
    console.log("Archive tasks:", selectedTasks);
    setSelectedTasks([]);
  };

  return (
    <Box>
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
              <TableCell width={'20px'}>
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
              <TableCell width={'20px'}>SI</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell width={'200px'}>Created On</TableCell>
              <TableCell width={'20px'}></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {taskList.map((task, index) => {
              console.log(task);
              return (
                <TableRow className={`${task.status === 'completed' ? 'completed-todo' : ''}`} key={task.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedTasks.includes(task.id)}
                      onChange={() => {
                        setSelectedId(task.id);
                        console.log(task.id);
                        handleCheckboxChange(task.id);
                      }}
                    />
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{moment(task.addedTime).fromNow()}</TableCell>
                  <TableCell>
                    <IconButton type="submit" color="primary" aria-label="Next" onClick={() => {
                      setAddModalOpen(task.id)
                    }} >
                      <Edit />
                    </IconButton>
                  </TableCell>

                </TableRow>
              );
            })}
            {taskList.length === 0 ? <TableRow sx={{
              height: "5  00px"
            }}>
              <TableCell colSpan={'6'}
                sx={{
                  height: "500px",
                  textAlign: "center",
                }}
              >

                No Data ! Add a task
              </TableCell>
            </TableRow>
              :
              ""
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: "16px", gap: "15px", display: "flex" }}>
        <Button
          variant="contained"
          color="secondary"
          //   startIcon={<DeleteIcon />}
          onClick={() => {
            handleDelete();
            // console.log(selectedTasks, selectedId);
          }}
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
        {/* <Button
          variant="contained"
          //   startIcon={<ArchiveIcon />}
          onClick={handleArchive}
          disabled={selectedTasks.length === 0}
        >
          Archive
        </Button> */}
        <Button
          variant="contained"
          //   startIcon={<ArchiveIcon />}
          onClick={() => {
            setAddModalOpen(taskList[taskList.length - 1]?.id >= 0 ? taskList[taskList.length - 1]?.id + 1 : 1)
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
