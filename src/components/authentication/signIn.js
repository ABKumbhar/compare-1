import React, { Component } from 'react'
import {Form,Row,Col,Container,Button, Nav} from 'react-bootstrap'
import './auth.css'
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { login } from '../../actions/auth';
import { SignIn } from '../navbar/in';

class SigninForm extends Component {
    state = {
        email : '',
        password : '',
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };
    
      onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
       
      };

  

      onChange = (e) => this.setState({ [e.target.name]: e.target.value });
        
    render() {    const { email,  password } = this.state;
    if (this.props.isAuthenticated) {
        return <Redirect to="/" />;
      }
  
         return(
            <div>
                <Container id="cont">
                    <Row>

                        <Col lg={4}>
                    <div id="jumbo"></div>
                        </Col>
                        <Col lg={8}>
                        Don't have account? <Link to='/register' style={{color: "blue"}}>Click here </Link> for register. 

                  <Form className="form" onSubmit = {this.onSubmit}> 
                  <Form.Group controlId="formGroupEmail">
                        <Form.Label className="required">Email</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter email" required onChange={this.onChange} value={email} name="email"/>
                    </Form.Group>

  
                    <br/>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label className="required">Password</Form.Label>
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
