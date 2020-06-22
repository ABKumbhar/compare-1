import React, { Component } from 'react'
import axios from 'axios';
import './contentDetails.css'
import FeatureListing from './featureListing'
import {Container,Jumbotron,Image,Spinner, Row,Col,Alert, Button} from 'react-bootstrap'
class Details extends Component {
    state={ 
    loading:false,
    data:[],
   
    }
    componentDidMount(){
        const slug = this.props.match.params.slug;
        console.log(slug)
        axios.get(`https://aniket1999.pythonanywhere.com/en-gb/division/${slug}/company/`)
        .then(res=>{
            console.log(res);
            this.setState({
                loading:true,
                data:res.data,
                
            });
            console.log(this.state)
        });
    }
    render() {
      const details =this.state.data;
           return(
           <Container>
               { this.state.loading && details && details.map(detail =>{
                   return(
                    <div key={detail.id}>
                    <Jumbotron>
                        <Image src={detail.logo}/>
                    </Jumbotron>
                    <Row>
                    <Col lg={10}>
                            
                            <h1>{detail.name}</h1>
                            <hr/>
                            <span>About us</span>
                            <p>
                                {detail.headline}
                            </p>
                            <hr/>
                            <h3>Here's why you should check their site!</h3>
                            <h4>Best For:</h4>
                            <p>
                                {detail.bestfor}
                            </p>
                            <hr/>
                            <h3>Features to note!</h3>
                            <ul>
                                {/* {details.featuresub} */}
                                <FeatureListing features={details.featuresub}/>
                            </ul>
                   </Col>
                   <Col lg={2}>
                     
                     <h4>Review: {detail.review}</h4>
                     <a href={detail.url}>Visit Site</a>
                   </Col>
                   </Row>
                   <Row>
                   
                   <Alert variant="success">
                        Click here to view the{' '}
                        <Alert.Link href={detail.url}>website</Alert.Link>. .
                    </Alert>
                   </Row>
                   </div>
                   )
                   
               })}
           </Container>
           
           )
    }
}
export default Details;
