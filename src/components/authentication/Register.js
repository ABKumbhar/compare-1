import React, { Component } from 'react'
import {Form,Row,Col,Container,Button} from 'react-bootstrap'
import './auth.css'
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import {connect} from 'react-redux'
import { useAlert } from 'react-alert'
class Register extends Component {
    state = {
        username : '',
        email : '',
        password : '',
        first_name : '',
        last_name : '',
        password2 : '',
        error: '',
    }
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };
    
    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password,first_name,last_name,password2 } = this.state;
        if (password !== password2) {
          alert("Password do not match!")  
        } 
        else {
            const newUser = {
           
              username,
              email,
              password,

              first_name,
              last_name,
            };
            this.props.register(newUser);
          }
        };
      
 
      
    
      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
      
    render() {   
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
          }
         const { username, email, password,first_name, last_name,password2 } = this.state;
         return(
            <div>
                <Container id="cont">
                    <Row>

                     <Col lg={4}>
                    <div id="jumbo"></div>
                        </Col>
                        <Col lg={8}>
                            <div className="text-center">
                        Already have account? <Link to='/login' style={{color: "blue"}}>Click here </Link> for logging in. 
                           </div>
                  <Form className="form" onSubmit = {this.onSubmit}> 
                  <Form.Group controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter username" required onChange={this.onChange} value={username} name="username"/>
                    </Form.Group>

                    <Row>
                        <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" required id="style-form" type="text" onChange={this.onChange} value={first_name} name="first_name" />
                        </Col>
                        <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" type="text" onChange={this.onChange} value={last_name} name="last_name"/>
                        </Col>
                    </Row>
                    <br/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email" required onChange={this.onChange} value={email} name="email"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  size="lg" type="password" placeholder="Password" required onChange={this.onChange} value={password} name="password"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control  size ="lg" type="password" placeholder="Password (again)" required onChange={this.onChange} value={password2} name="password2"/>
                        <Form.Control.Feedback type="invalid" tooltip>
                        something
                   </Form.Control.Feedback>

                    </Form.Group>
                   
                    <Button variant="dark" id="button" type="submit"  >Submit</Button>
         

                    </Form>
                    </Col>
                    </Row>

                    </Container> 
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, { register, createMessage })(Register);
  