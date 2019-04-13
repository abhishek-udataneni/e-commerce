import React, { Component } from 'react';
import {Form,FormGroup,Label,Button,Input} from "reactstrap";
class NewUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName : "",
            lastName : ""
         };
    }
    handleFirstNameChange = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }
    handleLastNameChange = (e) => {
        this.setState({
            lastName : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        this.props.onSubmit({firstName,lastName})
        this.setState({firstName: "", lastName : ""})
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input placeholder="first name" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                </FormGroup>    
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input placeholder="last name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary"> create </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;