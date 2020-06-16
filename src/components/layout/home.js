import React, { Component } from 'react';
import image from './images/bg.jpg'
import {Jumbotron,Container, Row, Col,Carousel} from'react-bootstrap';
import './home.css';


// Blogs and footer

class Home extends Component {
    render() {
        return (
            <div>
                 {/* Blogs */}
                <h3 className="text-center"> <strong>TOP BLOGS</strong></h3>
                 <Container id="container">
                     <div className="width">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}text="Firstslide"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image}text="Second slide"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={image} text="Third slide" bg="20232a"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                 </Container>   
                
                 {/* footer */}
                 <footer>
                 
                    <Jumbotron id="footer">
                      {/* <Container> */}
                        <Row>
                            <Col md={6}className="text-center">
                              Bonjour Techies
                              <div>
                                <i className="far fa-envelope"></i>
                                <i className="fas fa-phone"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-facebook-f"></i>
                            </div>
                             <ul className="copyright">
                                <li>&copy; Untitled</li>
                                <li>Website: <a href="https://bonjourtechies.com/" className="text-danger">Bonjour Techies</a></li>
                             </ul>
                            </Col >
                            <Col md={6} id="footer-text" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Col>
                        </Row>
                      {/* </Container> */}
                    </Jumbotron>
                 
                </footer>
             </div>
        )
    }
}
export default Home;
