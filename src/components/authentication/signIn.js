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
