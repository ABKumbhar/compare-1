import React, { Component } from 'react'
import {Form,Row,Col,Container,Button} from 'react-bootstrap'
import './auth.css'
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { login } from '../../actions/auth';
import { SignIn } from '../navbar/in';

class SigninForm extends Component {
    state = {
        username : '',
        password : '',
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };
    
      onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
       
      };

  

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
        
    render() {    const { username,  password } = this.state;
    if (this.props.isAuthenticated) {
        return <Redirect to="/" />;
      }
  
         return(
            <div>
                <Container>
                    <Row>

                        <Col lg={4}>
                    <div id="jumbo"></div>
                        </Col>
                        <Col lg={8}>
                        Don't have account? <a href='/register' style={{color: "blue"}}>Click here </a> for register. 

                  <Form className="form" onSubmit = {this.onSubmit}> 
                  <Form.Group controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter username" required onChange={this.onChange} value={username} name="username"/>
                    </Form.Group>

  
                    <br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  size="lg" type="password" placeholder="Password" required onChange={this.onChange} value={password} name="password"/>
                    </Form.Group>
                    <Button variant="dark" id="button" type="submit">Submit</Button>
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
  
export default connect(mapStateToProps, { login })(SigninForm);
