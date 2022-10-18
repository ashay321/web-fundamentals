import React, { useState } from 'react';
import './UserItem.css';
import { useStateValue } from './StateProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


function UserItem({user, id}) {
  const [{ users }, dispatch] = useStateValue();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const removeUser = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'DELETE',
    };
    fetch(`/users/${id}`, requestOptions)
      .then(data => {
        console.log(data);
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
  }

  const editUser = (e) => {
    e.preventDefault();
    handleClose();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: "ashay321",
        email: email,
    })
    };

    fetch(`/users/${id}`, requestOptions)
      .then(data => {
        console.log(data);
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
      });
  }

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



  const renderEditButton = 
    <strong>
        <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={handleOpen}
        >
            Edit
        </Button>
    </strong>

    const renderDeleteButton = 
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={removeUser}
            >
                Delete
            </Button>
        </strong>
 

  return (
    
        <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="center">{user.userId}</TableCell>
            <TableCell component="th" scope="row">
                {user.firstName}
            </TableCell>
            <TableCell align="center">{user.lastName}</TableCell>
            <TableCell align="center">{user.email}</TableCell>
            <TableCell align="center">{renderEditButton}</TableCell>
            <TableCell align="center">{renderDeleteButton}</TableCell>
            <TableCell align="center">{
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

                {/* <Input value={title} onChange={(e)=> setTitle(e.target.value)}/> */}
                <div className="task-input">
                    <TextField className='task-input' fullWidth label="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>

                </div>
                <div className="task-input">
                    <TextField fullWidth label="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </div>
                <div className="task-input">
                    <TextField fullWidth label="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                
                <div className='task-button'>
                    <Button variant='contained' onClick={editUser}>Edit User</Button>
                    <Button variant='contained' onClick={handleClose}>Close</Button>
                </div>
                
                </Box>
            </Modal>}
            </TableCell>
        </TableRow>

        


  )
}



export default UserItem