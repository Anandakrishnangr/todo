import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button } from '@mui/material';


const dummyData = [
  { id: 1, heading: 'Task 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', addedTime: '2022-01-01 10:00:00' },
  { id: 2, heading: 'Task 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', addedTime: '2022-01-02 12:30:00' },
  // Add more dummy data as needed
];

const TodoList = () => {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleCheckboxChange = (taskId) => {
    const newSelectedTasks = selectedTasks.includes(taskId)
      ? selectedTasks.filter((id) => id !== taskId)
      : [...selectedTasks, taskId];

    setSelectedTasks(newSelectedTasks);
  };

  const handleDelete = () => {
    // Implement delete logic using selectedTasks
    console.log('Delete tasks:', selectedTasks);
    setSelectedTasks([]);
  };

  const handleMarkAsCompleted = () => {
    // Implement mark as completed logic using selectedTasks
    console.log('Mark as completed:', selectedTasks);
    setSelectedTasks([]);
  };

  const handleArchive = () => {
    // Implement archive logic using selectedTasks
    console.log('Archive tasks:', selectedTasks);
    setSelectedTasks([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={selectedTasks.length > 0 && selectedTasks.length < dummyData.length}
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
            {dummyData.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedTasks.includes(task.id)}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                </TableCell>
                <TableCell>{task.heading}</TableCell>
                <TableCell>{task.description.substring(0, 50)}...</TableCell>
                <TableCell>{task.addedTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '16px' }}>
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
      </div>
    </div>
  );
};

export default TodoList;
