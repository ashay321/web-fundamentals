import React, { useState } from 'react';
import './AddUser.css';
import { useStateValue } from './StateProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function AddUser() {

  const [{ users }, dispatch] = useStateValue();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [id, setId] = useState("");

  const addNewUser = (e) => {
    e.preventDefault();

    console.log(username);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "firstName": firstName,
        "lastName": lastName,
        "username": "ashay321",
        "email": email,
    })
    };
    fetch('/users', requestOptions)
        .then(response => response.json())
        .then(data => {
          fetch('/users')
            .then(resp => {
              console.log(resp);
              console.log('======success=======');
              return resp.json();
            })
            .then(resp => {
                Object.entries(resp).map(([key, value]) => {
                    console.log("mapping values....")
                    console.log(value.username);
                })
                dispatch({
                  type: 'ADD_TO_USERS',
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
    
    setFirstName("");
    setLastName("");
    setEmail("");
    setUsername("");
    setMobile("");
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
        
        <Button variant="contained" type='submit' onClick={handleOpen}>Create New User</Button>
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
            <TextField fullWidth label="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          </div>

          <div className="task-input">
            <TextField fullWidth label="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
          </div>

          <div className="task-input">
            <TextField fullWidth label="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <div className="task-buttons">
            <Button variant='contained' onClick={addNewUser}>Add</Button>
            <Button variant='contained' onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default AddUser