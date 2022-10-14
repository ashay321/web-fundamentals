import React, { PureComponent } from 'react'
import { Input, Button, Form } from 'antd';
import "./InputForm.css"

export default class InputForm extends PureComponent {

    constructor() {
        super();
        this.state = {
            username: "", mobileNumber: "", standard: "", bloodGrp: ""
        }
        // this.form = Form.useForm();
    }

    handleSubmit = () => {
        this.props.handleSubmit({
            username: this.state.username, 
            mobileNumber: this.state.mobileNumber, 
            standard: this.state.standard, 
            bloodGrp: this.state.bloodGrp
        });
        this.setState({username: "", mobileNumber: "", standard: "", bloodGrp: ""});
        // this.form.resetFields();
    }
    
    render() {
        return (
            <div className="input-form-block">
                <div className='input-form'>
                    <Form>
                        
                        <div className='input-field'>
                            <div className='input-field-label'>Name:</div>
                            <Input required type="text" placeholder='Name' value={this.state.username} onChange={(e)=>{this.setState({username: e.target.value})}}/>
                        </div>

                        <div className='input-field'>
                            <div className='input-field-label'>Degree:</div>
                            <Input type="text" placeholder='Degree' value={this.state.standard} onChange={(e)=>{this.setState({standard: e.target.value})}}/>
                        </div>

                        <div className='input-field'>
                            <div className='input-field-label'>Mobile:</div>
                            <Input type="text" placeholder='Mobile' value={this.state.mobileNumber} onChange={(e)=>{this.setState({mobileNumber: e.target.value})}}/>
                        </div>

                        <div className='input-field'>
                            <div className='input-field-label'>BloodGrp:</div>
                            <Input type="text" placeholder='Blood group' value={this.state.bloodGrp} onChange={(e)=>{this.setState({bloodGrp: e.target.value})}}/>
                        </div>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        )
    }
}
