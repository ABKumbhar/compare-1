<<<<<<< HEAD
import React, { Component } from 'react'
import {Form,Row,Col,Container,Button} from 'react-bootstrap'
import './auth.css'
import {Link} from 'react-router-dom'
class SigninForm extends Component {
    render() {
         return(
            <div>
                <Container className="signin-container">
                    <Row>
                        <Col lg={4}>
                          <div id="jumbo"></div>
                        </Col>
                        <Col lg={8}>
                  <Form className="form"> 
                    <Row>
                        <Col xs={12} lg={6}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" required id="style-form"/>
                        </Col>
                        <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <br/>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  size="lg" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control  size ="lg" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Link to="/">
                    <Button variant="dark" id="button">Submit</Button>
                    </Link>
                    </Form>
                    </Col>
                    </Row>
                    </Container> 
            </div>
        )
    }
}
export default SigninForm;
=======
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
>>>>>>> 6211c0bc7c7d1b6aeb1d60c586bccdb07e734955
