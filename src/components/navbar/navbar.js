import React, { Component } from 'react';
import SignIn from './in';
import SignOut from './out';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
class Top extends Component {
    render() {
        return (
    <div>
          
         <Navbar bg="light" variant="light"expand="lg" >
            <Navbar.Brand href="/">Bonjour Techies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                       <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Technology</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Marketing</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Sports</NavDropdown.Item>
                        {/* <NavDropdown.Divider ./> */}
                        <NavDropdown.Item href="#action/3.4">Design</NavDropdown.Item>
                       </NavDropdown>
                     </Nav>
                <Form inline>
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