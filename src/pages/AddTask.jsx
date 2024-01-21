import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField, Typography, Modal, Backdrop, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/Todo/todoSlice";

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
  let allTask = useSelector((state)=>state.todo)
  const handleClose = () => {
    props.setOpen(false);
  };
  let dispatch = useDispatch();
  let [task, setTask] = useState({
    title: '',
    discription: ""
  });
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open>0?true:false}
    >
      <Modal
         open={props.open>0?true:false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Tasks
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              sx={{ m: 1 }}
              onChange={(e) => {
                setTask((prev) => ({ ...prev, title: e.target.value }));
              }}
            />
            <TextField
              sx={{ m: 1 }}
              onChange={(e) => {
                setTask((prev) => ({ ...prev, discription: e.target.value }));
              }}
            />
            <Button
              variant="contained"
              //   startIcon={<ArchiveIcon />}
              onClick={() => {
                dispatch(addTask(task));
                handleClose();
              }}
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
