import React, { Component } from 'react'
import axios from 'axios';
import './contentDetails.css';
import FeatureListing from './featureListing';
import IntroDetails from './introDetails'
import TableDetails from './tableDetails'
import StarRatings from 'react-star-ratings';

import {Container,Jumbotron,Image, Row,Col,Alert} from 'react-bootstrap';
class Details extends Component {
    state={ 
    loading:false,
    data:[],
    headerData:[],
    introData:[]
    }
    componentDidMount(){
       const slug = this.props.match.params.slug;
       console.log(slug);
       axios.get(`https://aniket1999.pythonanywhere.com/en/division/${slug}/company/`)
        .then(res=>{
            // console.log(res);
            this.setState({
                ...this.state,
                loading:true,
                data:res.data.slice(0,),
                headerData:res.data.slice(0,1)
            });
            console.log(this.state)
        });
        axios.get(`https://aniket1999.pythonanywhere.com/en/division/${slug}/details/`)
        .then(res=>{
            this.setState({
             ...this.state,
              introData:res.data
            })
            console.log(this.state)
        })
}

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    render() {
      const details =this.state.data;
      const header =this.state.headerData;
      const Intro= this.state.introData;
           return(
           <Container>
                <IntroDetails Intro={Intro}/>
                   <TableDetails header={header} details={details}/> 
               
                
                { this.state.loading && details && details.map(detail =>{
                   return(
                    <div key={detail.id}>
                    <div className="top-detail">
                    <Row>
                    <a target='_blank'rel="noopener noreferrer" href={detail.url}>
                    <h3 id="name" dangerouslySetInnerHTML={ {__html:  detail.name} }></h3>
                    </a>
                     <hr/>
                    </Row>
                    <Row>
                        <Col  lg={8}>
                            
                            <span id="aboutus">About us</span>
                             
                             <p id="about-company" dangerouslySetInnerHTML={ {__html:  detail.bestfor} }>
                                
                            </p>
                                
                            <hr/>
                         </Col>
                        <Col xs={{ order: 'first' }} md={{ order: 'last' }} lg={4}>
                         <Jumbotron>
                         <Image src={`https://aniket1999.pythonanywhere.com/${detail.logo}`} className="detail-image"/>
                         </Jumbotron>
                         <div id="style-box">
                         <h4>Rating: {detail.review}/5        
                          <StarRatings
                            rating={detail.review}
                            starRatedColor="yellow"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            starDimension="25px"
                            />
</h4>
                        <a target='_blank' rel="noopener noreferrer" href={detail.url} as="h6">Go to website</a>
                        </div>
                        </Col>
                    </Row>
              </div>
                    <Row>
                    <Col >
                           
                            <h3 id="h3">Features to note!</h3>
                            
                             <FeatureListing features={detail.featuresub}/>
                   </Col>
                   </Row>
                   <Row>
                   
                   <Alert  id ="alert">
                        <Alert.Link target='_blank'rel="noopener noreferrer" href={detail.url} id="style-alert" >
                            {detail.headline ? 
                             <div className="text-center" dangerouslySetInnerHTML={ {__html:  detail.headline} }></div>
                            :<div className="text-center">Click here for more!</div>}
                   </Alert.Link>. .
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
