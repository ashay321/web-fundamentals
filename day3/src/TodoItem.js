import React, { useState } from 'react';
import './TodoItem.css';
import { useStateValue } from './StateProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';


function TodoItem({todo, id}) {
  const [{ todos }, dispatch] = useStateValue();
  const [title, setTitle] = useState(todo.title);
  const [details, setDetails] = useState(todo.body);

  const removeTodo = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'DELETE',
    };
    fetch(`/todos/${id}`, requestOptions)
      .then(data => {
        console.log(data);
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
  }

  const editTodo = (e) => {
    e.preventDefault();
    handleClose();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, body: details,
      deadline: "2023-05-05T11:50:55", userId: 1})
    };

    fetch(`/todos/${id}`, requestOptions)
      .then(data => {
        console.log(data);
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='todo-item'>
      {/* <Button onClick={removeTodo}>Remove</Button>


      <Button onClick={handleOpen}>Edit</Button> */}
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
            <TextField className='task-input' fullWidth label="New title" value={title} onChange={(e)=> setTitle(e.target.value)}/>

          </div>
          <div className="task-input">
            <TextField fullWidth label="New description" value={details} onChange={(e)=> setDetails(e.target.value)}/>
          </div>
          
          <div className='task-button'>
            <Button variant='contained' onClick={editTodo}>Edit Task</Button>
            <Button variant='contained' onClick={handleClose}>Close</Button>
          </div>
          
        </Box>
      </Modal>

      <ListItem 
        alignItems="flex-start"
        secondaryAction = {<div>
          <IconButton onClick={handleOpen} edge="end" aria-label="comments">
            <EditIcon />
        </IconButton>
        <IconButton onClick={removeTodo} edge="end" aria-label="comments">
            <DeleteIcon />
        </IconButton>
        </div>}
      >
        <ListItemAvatar>
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={todo.title}
          secondary={
            <React.Fragment>
              {/* <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {todo.body}
              </Typography> */}
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
              {todo.body}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="hr" />
      
    </div>

  )
}

export default TodoItem