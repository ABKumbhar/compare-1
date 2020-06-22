import React, { Component } from 'react';
import SignIn from './in';
import SignOut from './out';
import './navbar.css'
import {Navbar,Form,FormControl,Button} from 'react-bootstrap';
class Top extends Component {
    render() {
        return (
    <div>
          
         <Navbar bg="light" variant="light" expand="lg"className="navbar" >
            <Navbar.Brand href="/" id="brand">Bonjour Techies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                     
                <Form inline  className="ml-auto">
                <Button variant="danger"><i className="fas fa-search"></i></Button>
                    <FormControl type="text" placeholder="Look for the best...." className="mr-sm-2" />
                  
                        <SignIn/>
                        <SignOut/>
                </Form>
            </Navbar.Collapse>
        </Navbar>

</div>
        )
    }
}
export default Top;