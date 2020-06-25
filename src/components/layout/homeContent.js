import React, { Component } from 'react';
import {Row,Col,Container, Card,Button,Jumbotron,Image} from 'react-bootstrap';
import {Link } from 'react-router-dom'
import Home from './home';
import './homeContent.css';
import {motion} from 'framer-motion';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';
import Categories from '../Categories/categories'

class HomeContent extends Component {
    state={
        results:[]
    }
    componentDidMount(){
        axios.get(`https://aniket1999.pythonanywhere.com/en/division/`)
         .then(data=>{
            //  console.log(data);
             this.setState({
                results:data.data
             });
             console.log(this.state)
         });
     }
     arrowVariants={
         hidden:{x:250},
         visible:{
             x:800,
             transition:{
                 duration:1,
                 yoyo:Infinity
             }
         }
     }
     executeOnClick(isExpanded) {
        console.log(isExpanded);
     }
    render() {
        const results = this.state.results;
        
        return (
            
            <div>
                
            <Jumbotron fluid>
            
            <Home/>
            {/* <Container>
                <p className="text-center" id="best">For the best blogs!</p>
            <motion.div
             variants={this.arrowVariants}
             initial="hidden"
             animate="visible"
            >
                <i className="style-arrow fa fa-arrow-right" aria-hidden="true"></i>
                </motion.div>
                </Container> */}
            </Jumbotron>
               {/* <Jumbotron className="top-jumbo">
                <div className="text">
                <h3>
                    <strong>Find Your Top Option Amongst The Best</strong>
                </h3>
                <p>
                    Look through your favourite category to find the top and best choice.
                    <br/><span>Compare the list and decide with no daze.</span>
                </p>
                </div>
                </Jumbotron> */}
           
                
                <Container className="top-cont">
                    <Row>
                    <Col id="style-category">
                       <Categories/>
                       </Col>
                    </Row>
                   <Row id="lists">
                       {/*  */}
                       <Col>
                       <h1>Lists for you!</h1>  
                       <hr/>
                 
                    
                           
                           {results && results.map(result =>{
                               return(
                                <Link to={'/en/company/' + result.path} key={result.id}>
                                    
                                        <Card className="text-left" key={result.id}>
                                        <Row>
                                        
                                        <Col sm={9}>
                                        <Card.Header as ="h3" dangerouslySetInnerHTML={ {__html: result.name} }></Card.Header>
                                        <Card.Body>
                                            {/* <Card.Title>Special title treatment</Card.Title> */}
                                            <Card.Subtitle className="mb-2 text-muted">Category:{result.category}</Card.Subtitle>
                                            {/* <ShowMoreText
                                                
                                                lines={3}
                                                more=''
                                                onClick={this.executeOnClick}
                                                expanded={false}
                                                width={500}
                                            > */}
                                            <div className="sidebar-box">
                                            <Card.Text
                                            dangerouslySetInnerHTML={ {__html: result.headline} } id="a">
                                            </Card.Text>
                                            {/* </ShowMoreText> */}
                                            <Button  id="details-btn" className="text-center"><strong>View More</strong></Button>
                                            </div>
                                         </Card.Body>
                                         </Col>
                                         <Col sm={3}>
                                           <div>
                                               <Image src={result.logo} className="image"/>
                                           </div>
                                         </Col>
                                         </Row>
                                         </Card>
                                                                        
                                   </Link>
                               )
                           })}
                                 </Col>
                   </Row>
                           
                           <hr/>                   
               </Container> 
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
export default HomeContent;