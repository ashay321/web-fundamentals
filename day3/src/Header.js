import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import {Button} from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  return (
    <div className='app-header'>
        <div className="app-header-left">
          {/* <div>FareEye</div> */}
          
          <div className="menu-options">
            <Link className='header-link' to='/'>
                <div className="menu-item">
                  <HomeIcon/>
                  Home
                </div>
            </Link>
            <Link className='header-link' to='/tasks'>
                <div className="menu-item">
                  <AssignmentIcon/>
                  Tasks
                </div>
            </Link>
            <Link className='header-link' to='/users'>
              <div className="menu-item">
                  <GroupIcon/>
                  Users
                </div>
            </Link>
          </div>
        </div>
        <div>Ashay Wanjarkar</div>
    </div>
  )
}

export default Header