
import React, { Component,useEffect } from 'react';
import {Row,Col,Container, Card,Button,Jumbotron,Image,} from 'react-bootstrap';
import {Link ,Redirect, withRouter} from 'react-router-dom'
import Home from '../layout/home';
import '../layout/homeContent.css';
import axios from 'axios';
import Categories from '../Categories/categories'
import {connect} from 'react-redux'
function SearchComponent(props) {
 
        return (
            <div>
       
                <Container>
                   <Row>
                       <Col>
                       <h1>Searched results</h1>  
                       <hr/>
               
                    
                           {props.location.aboutProps && props.location.aboutProps.length ? props.location.aboutProps.map(result =>{
                               return(
                                <Link to={'detail/' + result.path} key={result.id}>
                                    
                                        <Card className="text-left" key={result.id}>
                                        <Row>
                                        
                                        <Col lg={9}>
                                        <Card.Header as ="h3" dangerouslySetInnerHTML={ {__html: result.name} }></Card.Header>
                                        <Card.Body>
                                            {/* <Card.Title>Special title treatment</Card.Title> */}
                                            <Card.Subtitle className="mb-2 text-muted">Category:{result.category}</Card.Subtitle>
                                            <Card.Text
                                            dangerouslySetInnerHTML={ {__html: result.headline} }>
                                            </Card.Text>
                                            <Button variant="secondary" id="details-btn" className="text-center">View details</Button>
                                         </Card.Body>
                                         </Col>
                                         <Col lg={3}>
                                           <div>
                                               <Image src={result.logo} className="image"/>
                                           </div>
                                         </Col>
                                         </Row>
                                         </Card>
                                                                        
                                   </Link>
                               )
                           })
                        : <div>Oops, No results were found!</div>
                           }
                         
                                 </Col>
                   </Row>
                           
                           <hr/>                   
               </Container> 
            </div>
        )
    
}
const mapStateToProps = state => {
    return {
      language_select: state.language.language_select
    }
  }
export default withRouter(connect(mapStateToProps)(SearchComponent));