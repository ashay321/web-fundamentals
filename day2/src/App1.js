import React, { PureComponent } from 'react'
import InputForm from './Components/InputForm';
import UserListDisplay from './Components/UserListDisplay';

export default class App1 extends PureComponent {

    constructor(){
        super();
        this.state = {
            counter: 0,
            users: [{"name":"Ashay", "standard": "Btech", "mobileNumber":"982727272", "bloodGrp": "B+ve"}]
        }
    }

    incrementCounter = () => {
        let newCounter = this.state.counter + 1;
        this.setState({counter: newCounter});
    }

    handleSubmit = (value) =>{
    
        let newUser = {
            name: value.username,
            standard: value.standard,
            mobileNumber: value.mobileNumber,
            bloodGrp: value.bloodGrp
        }

        this.setState((state) => ({
            users: [...state.users, newUser],
        }));

    }

    render() {
        return <div>
            {/* Input form */}
            <InputForm handleSubmit={this.handleSubmit}/>            
            
            {/* Display list */}
            <UserListDisplay users={this.state.users}/>

        </div>
    }
}
