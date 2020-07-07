import React, { Component } from 'react'
import axios from 'axios';
import './contentDetails.css';
import FeatureListing from './featureListing';
import IntroDetails from './introDetails'
import TableDetails from './tableDetails'
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
                        <Col  lg={8}>
                            <h3 id="name" dangerouslySetInnerHTML={ {__html:  detail.name} }></h3>
                            <hr/>
                            <span id="aboutus">About us</span>
                             
                             <p id="about-company" dangerouslySetInnerHTML={ {__html:  detail.bestfor} }>
                                
                            </p>
                                
                            <hr/>
                         </Col>
                        <Col  lg={4}>
                         <Jumbotron>
                         <Image src={`https://aniket1999.pythonanywhere.com/${detail.logo}`} className="detail-image"/>
                         </Jumbotron>
                         <div id="style-box">
                         <h4>Review: {detail.review}/5</h4>
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
                   
                   <Alert variant="success">
                        <Alert.Link target='_blank'rel="noopener noreferrer" href={detail.url} id="style-alert" >
                            {detail.headline ? 
                             <p>{detail.headline}</p>
                            :'Click here for more!'}
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
