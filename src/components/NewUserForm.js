import React, {Component} from "react";
// import { Form } from "reactstrap";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class NewUserForm extends Component{

    state={
        firstName:'',
        lastName:'',
        address:'',
        email:'',
        contact:'',
        photo:'',
        CV:''
    }
    handleFirstNameChange =e=>{
        this.setState({
            firstName:e.target.value
        });
    }

    handleLastNameChange =e=>{
        this.setState({
            lastName:e.target.value
        });
    }

    handleAddressChange =e=>{
        this.setState({
            address:e.target.value
        });
    }

    handleEmailChange =e=>{
        this.setState({
            email:e.target.value
        });
    }

    handleContactChange =e=>{
        this.setState({
            contact:e.target.value
        });
    }

    handlePhotoChange =e=>{
        this.setState({
            photo:e.target.value
        });
    }

    handleCvChange =e=>{
        this.setState({
            cv:e.target.value
        });
    }


    handleSubmit = e=>{
        e.preventDefault();

        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        });
        this.setState({
            firstName:'',
            lastName:'',
            address:'',
            email:'',
            contact:'',
            photo:'',
            CV:''
            });
    }
    render(){
        return(
            
            <Form onSubmit={this.handleSubmit}>
                <h3>
                User Info Update
                </h3>   
                <FormGroup>
                    <Label>
                        First Name
                    </Label>
                    <Input required placeholder='First Name' onChange={this.handleFirstNameChange} value= {this.state.firstName}/> 
                </FormGroup>
                <FormGroup>
                    <Label>
                        Last Name
                    </Label>
                    <Input required placeholder='Last Name' onChange={this.handleLastNameChange} value= {this.state.lastName}/> 
                </FormGroup>
                <FormGroup>
                    <Label>
                        Address
                    </Label>
                    <Input required placeholder='Address' onChange={this.handleAddressChange} value= {this.state.address}/> 
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">
                    Email
                    </Label>
                    <Input required placeholder='Email' onChange={this.handleEmailChange} value= {this.state.email}/> 
                </FormGroup>
                <FormGroup>
                    <Label>
                        Contact
                    </Label>
                    <Input required placeholder='Contact' onChange={this.handleContactChange} value= {this.state.contact}/> 
                </FormGroup>
                <FormGroup>
                    <Label>
                        Photo
                    </Label>
                    <Input required placeholder='Photo' onChange={this.handlePhotoChange} value= {this.state.Photo} id="exampleFile"
                    name="file"
                    type="file"/> 
                </FormGroup>
                <FormGroup>
                    <Label>
                        CV
                    </Label>
                    <Input required placeholder='CV' onChange={this.handleCvChange} value= {this.state.cv} id="exampleFile"
                    name="file"
                    type="file"/> 
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color='primary'>
                        Submit
                    </Button>
                </FormGroup>

            </Form>
        )    
    }

}
export default NewUserForm;