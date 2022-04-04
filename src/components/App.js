import React, {Component} from "react";
import {connect} from "react-redux";
import {getUsersRequest, createUserRequest, deleteUserRequest} from '../actions/users';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand, UncontrolledDropdown, DropdownToggle,
DropdownMenu, DropdownItem, Button, List, ListInlineItem, Toast, ToastHeader, ToastBody, Row, Col, Card, CardTitle,CardText} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props);

    this.props.getUsersRequest();

    // Nav bar
    this.toggle = this.toggle.bind(this);
    this.state ={
      isOpen: false,
      navCollapsed: true,
      showNavbar:false
    };
  }
  handleSubmit = ({firstName, lastName, address, email, contact, photo, CV })=>{
    console.log(firstName, lastName, address, email, contact, photo, CV);
    this.props.createUserRequest({
      firstName,
      lastName,
      address,
      email,
      contact,
      photo,
      CV
    });
  };

  handleDeleteUserClick = (userId)=>{
    this.props.deleteUserRequest(userId);

  };

  // nav bar toggle
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }






  render (){
    const users = this.props.users;
    const{navCollapsed}=this.state
  
    return(
      <container> 
      
      <div style = {{margin:'0 auto', padding:'20px', maxWidth:'600px'}}>
        <NewUserForm onSubmit= {this.handleSubmit}/>
        <UserList onDeletUser ={this.handleDeleteUserClick} users = {users.items}/>

      </div>
      </container>
     
    );
  }
}

export default connect(({users})=> ({users}),{
  getUsersRequest,
  createUserRequest,
  deleteUserRequest

})(App);
