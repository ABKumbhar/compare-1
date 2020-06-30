import React, { Component } from 'react'
import axios from 'axios';
import './contentDetails.css'
import ShowMoreText from 'react-show-more-text'
import FeatureListing from './featureListing'
import {Container,Jumbotron,Image, Row,Col,Alert} from 'react-bootstrap'
class Details extends Component {
    state={ 
    loading:false,
    data:[],
    introdata:[]
   
    }
    componentDidMount(){
        const slug = this.props.match.params.slug;
        console.log(slug)
        axios.get(`https://aniket1999.pythonanywhere.com/en-gb/division/${slug}/company/`)
        .then(res=>{
            // console.log(res);
            this.setState({
                loading:true,
                data:res.data.slice(1,),
                introdata:res.data.slice(0,1)
            });
            console.log(this.state)
        });
    }
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    render() {
      const details =this.state.data;
      const introDetails =this.state.introdata;

           return(
           <Container>
               {introDetails && introDetails.map(intro=>{
                   return(
                       <div>
                    <h1 id="name">{intro.name}</h1>
                    <span id="aboutus">What is it?</span>
                        <p id="headline">
                             {intro.headline}
                        </p>
                        <p>
                            {intro.bestfor}
                        </p>
                        <hr/>
                        </div>
                   )
               })}
               
               { this.state.loading && details && details.map(detail =>{
                   return(
                    <div key={detail.id}>
                    <div className="top-detail">
                    <Row>
                        <Col lg={8}>
                            <h3 id="name">{detail.name}</h3>
                            <hr/>
                            <span id="aboutus">About us</span>
                           <ShowMoreText
                                    /* Default options */
                                    lines={10}
                                    more='Show more'
                                    less='Show less'
                                    anchorClass=''
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={700}
                                >
                             <p id="headline">
                                {detail.bestfor}
                            </p>
                                </ShowMoreText>
                            <hr/>
                         </Col>
                        <Col lg={4}>
                         <Jumbotron>
                         <Image src={`https://aniket1999.pythonanywhere.com/${detail.logo}`} className="detail-image"/>
                         </Jumbotron>
                         <div id="style-box">
                         <h4>Review: {detail.review}/5</h4>
                        <a target='_blank' rel="noopener noreferrer" href={detail.url}>Visit Site</a>
                        </div>
                        </Col>
                    </Row>
              </div>
                    <Row>
                    <Col >
                            
                 
                          
                            <h3 id="h3">Here's why you should visit their site!</h3>
                            {/* <h4>Best For:</h4> */}
                            <p id="bestfor">
                                {detail.headline}
                            </p>
                            <hr/>
                            <h3 id="h3">Features to note!</h3>
                             
                             <FeatureListing features={detail.featuresub}/>
                   </Col>
                   </Row>
                   <Row>
                   
                   <Alert variant="success">
                        <Alert.Link target='_blank'rel="noopener noreferrer" href={detail.url} id="style-alert">Visit website for more!</Alert.Link>. .
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
