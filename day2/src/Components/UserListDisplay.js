import React, { Component } from 'react'
import './UserDisplayList.css'

export default class UserDisplayList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <div className='user-details-header'>
              <div>Username</div>
              <div>Standard</div>
              <div>Mobile Number </div>
              <div>Blood group</div>
            </div>
          </li>
        </ul>
        <ul>
        {   
            this.props.users.map(element => (
                
                <li key={element.name}>
                  <div className='user-details'>
                    <div>{element.name}</div>
                    <div>{element.standard}</div>
                    <div>{element.mobileNumber} </div>
                    <div>{element.bloodGrp}</div>
                  </div>
                  

                   
                </li>
                
                
            ))
        }
        </ul>
      </div>
    )
  }
}
