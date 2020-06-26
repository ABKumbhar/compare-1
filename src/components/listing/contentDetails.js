import React, { Component } from 'react'
import axios from 'axios';
import './contentDetails.css'
import FeatureListing from './featureListing'
import {Container,Jumbotron,Image,Spinner, Row,Col,Alert} from 'react-bootstrap'
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
            // console.log(res);
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
                    <div className="top-detail">
                    <Row>
                        <Col>
                            <h2 id="name">{detail.name}</h2>
                            
                        </Col>
                        <Col>
                         <Jumbotron>
                            <Image src={detail.logo}/>
                         </Jumbotron>
                        </Col>
                    </Row>
              </div>
                    <Row>
                    <Col lg={10}>
                            
                            
                            <span id="aboutus">About us</span>
                            <p id="headline">
                                {detail.headline}
                            </p>
                            <hr/>
                            <h3 id="h3">Here's why you should visit their site!</h3>
                            {/* <h4>Best For:</h4> */}
                            <p id="bestfor">
                                {detail.bestfor}
                            </p>
                            <hr/>
                            <h3 id="h3">Features to note!</h3>
                             
                             <FeatureListing features={detail.featuresub}/>
                   </Col>
                   <Col lg={2} >
                    <div id="style-box">
                     <h4>Review: {detail.review}</h4>
                     <a target='_blank' href={detail.url}>Visit Site</a>
                     </div>
                   </Col>
                   </Row>
                   <Row>
                   
                   <Alert variant="success">
                        <Alert.Link target='_blank' href={detail.url} id="style-alert">Visit website for more!</Alert.Link>. .
                    </Alert>
                
                   </Row>
                   <hr/>
                   </div>
                   )
                   
               })}
           </Container>
        
           )
    }
}
export default Details;
