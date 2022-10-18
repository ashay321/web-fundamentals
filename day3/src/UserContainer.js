import React from 'react'
import AddUser from './AddUser'
import UserList from './UserList'
import './UserContainer.css'

function UserContainer() {
  return (
    <div className='app-body'>
        
        <div className="user-container">
            <div className="user-container-header">
              <div className="user-container-header-title">
                Users
              </div>

              {/* Create new User Button*/}
              <AddUser />
            </div>

            {/* User List Display */}
            <UserList/>
        </div>
    </div>
  )
}

export default UserContainer