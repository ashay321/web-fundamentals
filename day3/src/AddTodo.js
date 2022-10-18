import React, { useState } from 'react';
import './AddTodo.css';
import { useStateValue } from './StateProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function AddTodo() {

  const [{ todos }, dispatch] = useStateValue();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [id, setId] = useState("");


  const addNewTask = (e) => {
    e.preventDefault();

    console.log(title);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title,body: details,
      deadline: "2023-05-05T11:50:55", userId: 1})
    };
    fetch('/todos', requestOptions)
        .then(response => response.json())
        .then(data => {
          fetch('/todos')
            .then(resp => {
              console.log(resp);
              console.log('======success=======');
              return resp.json();
            })
            .then(resp => {
                Object.entries(resp).map(([key, value]) => {
                    console.log("mapping values....")
                    console.log(value.title);
                })
                dispatch({
                  type: 'ADD_TO_TODOS',
                  item: resp,
                });
              console.log("assigned todos....");
            })
            .catch(err => {
              console.log('======failure=======');
              console.log(err);
            });
          console.log(data);
        });

    
    

    setTitle("");
    setDetails("");
    handleClose();
  }

  // const setTodo = (e) => {
  //   e.preventDefault();
  //   setTitle(e.target.value);
  //   setId(e.target.value);
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='todo-container-header'>
        
        <Button variant="contained" type='submit' onClick={handleOpen}>Create New Task</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Title
          </Typography> */}

          {/* <input value={title} onChange={(e)=> setTitle(e.target.value)}/> */}
          <div className="task-input">
            <TextField fullWidth label="Enter a title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
          </div>

          <div className="task-input">
            <TextField fullWidth label="Enter the details" value={details} onChange={(e)=> setDetails(e.target.value)}/>
          </div>

          <div className="task-buttons">
            <Button variant='contained' onClick={addNewTask}>Add</Button>
            <Button variant='contained' onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default AddTodo