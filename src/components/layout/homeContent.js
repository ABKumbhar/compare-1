// This contains the code and styling of top jumbotron anf the contents of the cards

import React, { Component } from 'react';
import {Row,Col,Container, Card,Button,Jumbotron} from 'react-bootstrap';
import {Link } from 'react-router-dom'
import Home from './home';
import './homeContent.css';
import axios from'axios';

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
    render() {
        const results = this.state.results
        return (
            <div>
            <Jumbotron className="top-jumbo"fluid>
                <div className="text">
                <h3>
                    <strong>Find Your Top Option Amongst The Best</strong>
                </h3>
                <p>
                    Look through your favourite category to find the top and best choice.
                    <br/><span>Compare the list and decide with no hussle.</span>
                </p>
                </div>
            </Jumbotron>
                <Container className="top-cont">
                    <h1>Lists for you!</h1>  
                       <hr/>
                       <Row>
                           <Col >
                           {results.map(result =>{
                               return(
                                <Link to={'/en/company/ ' + result.id} key={result.id}>
                                    <Card className="text-left" key={result.id}>
                                        <Card.Header as ="h3">Top {result.name} </Card.Header>
                                        <Card.Body>
                                            {/* <Card.Title>Special title treatment</Card.Title> */}
                                            <Card.Subtitle className="mb-2 text-muted">Category:{result.subhead}</Card.Subtitle>
                                            <Card.Text>
                                             {result.headline}
                                            </Card.Text>
                                            <Button variant="success" id="details-btn" className="text-center">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Link>
                               )
                           })}
                           </Col>
                           </Row><hr/>                   
               </Container> 
               <Home/>
            </div>
        )
    }
}
export default HomeContent;