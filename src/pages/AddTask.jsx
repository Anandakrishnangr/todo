import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField, Typography, Modal, Backdrop, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../redux/Todo/todoSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const AddTask = (props) => {
  console.log(props)
  let allTask = useSelector((state) => state.todo)
  const [taskID, settaskID] = useState(null)
  console.log(allTask)

  useEffect(() => {
    let task = allTask?.find((elem) => elem.id === props.open)
    console.log(task)
    if (task) {
      console.log(props.open)
      settaskID({ id: props.open, index: allTask.indexOf(task) })
      setTask({
        description: task.description,
        title: task.title
      })
    }
    return () => {
      setTask({
        title: '',
        description: ""
      })
      settaskID(null)
    }
  }, [props.open])
  console.log(taskID)
  const handleClose = () => {
    props.setOpen(false);
  };
  let dispatch = useDispatch();
  let [task, setTask] = useState({
    title: '',
    description: ""
  });

  const handleAdd = () => {
    console.log(taskID)
    if (taskID?.id && taskID?.index >= 0) {
      console.log('update')

      let temp = [...allTask]
      temp[taskID.index] = { ...temp[taskID.index], title:task.title,description:task.description,status:'pending' }
      dispatch(
        updateTask(temp)
      )
    } else {
      console.log('first')
      dispatch(addTask(task))
    }

    handleClose();
  }
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open > 0 ? true : false}
    >
      <Modal
        open={props.open > 0 ? true : false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{paddingY:1}} component="h2">
            Add New Tasks
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            Title
            <TextField
              value={task.title}
              sx={{ m: 1 }}
              onChange={(e) => {
                setTask((prev) => ({ ...prev, title: e.target.value }));
              }}
              required={true}
            />
            Description
            <TextField
            multiline
            minRows={3}
              value={task.description}
              sx={{ m: 1 }}
              onChange={(e) => {
                setTask((prev) => ({ ...prev, description: e.target.value }));
              }}
            />
            <Button
              variant="contained"
              //   startIcon={<ArchiveIcon />}
              onClick={handleAdd}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </Backdrop>
  );
};
export default AddTask;
