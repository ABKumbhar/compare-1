import React, { Component } from 'react';
import {Row,Col,Container, Card,Button,Jumbotron,Image} from 'react-bootstrap';
import {Link } from 'react-router-dom'
import Home from './home';
import './homeContent.css';

import axios from 'axios';
import {connect} from 'react-redux'
import Categories from '../Categories/categories';
import Blogs from '../Blogs/blogs';

class HomeContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      results : []
    };
  }
   
    componentDidMount(){
        axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/division/trending/`)
         .then(data=>{
            //  console.log(data);
             this.setState({
                results:data.data
             })
             console.log(this.state)
         });
     }
   
    render() {
        const results = this.state.results;
        
        return (
            
            <div>
                
            <Jumbotron fluid>
              <Home/>
            </Jumbotron>
           
                
                <Container className="top-cont">
                  <Row >
                    <Col>
                       <Categories/>
                    </Col>
                    </Row>
                   <Row id="lists">
                       <Col lg={9}>
                       <div id="style-trend">Trending today...</div> 
                          {results && results.map(result =>{
                               return(
                                <Link to={'/en/company/' + result.path} key={result.id}>
                                         
                                        <Card className="text-left" key={result.id}>
                                        <hr></hr>
                                        <Row>
                                        
                                        <Col sm={9}>
                                      
                                        <Card.Header as ="h2" className="style-header" dangerouslySetInnerHTML={ {__html: result.name} }></Card.Header>
                                        <Card.Body>
                                            {/* <Card.Title>Special title treatment</Card.Title> */}
                                            <Card.Subtitle className="mb-2 text-muted">Category:{result.category}</Card.Subtitle>
                                             <div className="sidebar-box">
                                            <Card.Text
                                            dangerouslySetInnerHTML={ {__html: result.subhead} } id="a">
                                            </Card.Text>
                                            <Button  id="details-btn" className="text-center"><strong>View More</strong></Button>
                                            </div>
                                         </Card.Body>
                                         </Col>
                                         <Col sm={3}>
                                           <div>
                                               <Image src={`https://aniket1999.pythonanywhere.com/${result.logo}`} className="image"/>
                                           </div>
                                         </Col>
                                         </Row>
                                         </Card>
                                                                        
                                   </Link>
                               )
                           })}
                                 </Col>
                                 <Col lg={3}>
                                   <Blogs/>
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
const mapStateToProps = state => {
  return {
    language_select: state.language.language_select
  }
}
export default connect(mapStateToProps)(HomeContent);