import React, { Component } from 'react';
import image from './images/bg.jpg'
import {Jumbotron,Container, Row, Col,Carousel} from'react-bootstrap';
import './home.css';
import {motion} from 'framer-motion';


// Blogs and footer

class Home extends Component {
 blogVariants={
        hidden:{rotate:1},
        visible:{
            scale:1.2,
            transition:{duration:1,yoyo:Infinity}
        }
    }
    render() {
        return (
            <div>
                 {/* Blogs */}
                <Row>
                    {/* <Col lg={4}>
                     <Container>
                         <motion.div
                         variants={this.blogVariants}
                         initial="hidden"
                         animate="visible"
                         >
                          <h3 className=" style text-center"> 
                          <strong>HERE ARE SOME TOP BLOG SUGGESTIONS FOR YOU.<br/>
                          <span><h6>You dont want to miss them!</h6></span>
                          </strong></h3>
                         </motion.div>
                    </Container>
                    </Col> */}

                <Col >
               
                 <Container id="container">
                     <div>
                    <Carousel>
                        <Carousel.Item>
                            {/* <img
                            className="d-block w-100"
                            src={image}text="Firstslide"
                            alt="First slide"
                            /> */}
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        <Jumbotron className="top-jumbo">
                        <div className="text">
                        <h3>
                            <strong>Find Your Top Option Amongst The Best</strong>
                        </h3>
                        <p>
                            Look through your favourite category to find the top and best choice.
                            <br/><span>Compare the list and decide with no daze.</span>
                        </p>
                        </div>
                        </Jumbotron>
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
                    </Col>
                    </Row>
             </div>
        )
    }
}
export default Home;
