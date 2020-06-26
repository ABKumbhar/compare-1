import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import ShowMoreText from 'react-show-more-text';
import {Card,Row,Col,Button,Image, Container} from 'react-bootstrap'
 class CategoryDetails extends Component {
     state={
         loading:false,
         results:[]
     }
     componentDidMount(){
        const slug= this.props.match.params.slug;
        console.log(slug)
        axios.get(`https://aniket1999.pythonanywhere.com/en-gb/category/${slug}/division/`)
            .then(res=>{
                console.log(res);
                this.setState({
                    loading:true,
                    results:res.data
                })
            })
    }
    executeOnClick(isExpanded) {
        console.log(isExpanded);
     }
    render() {
        const results =this.state.results;
        return (
            <div>

                {results && results.map(result=>{
                    return(
                    <Container>
                        <Link to={'/en/company/' + result.path} key={result.id}>
                        <Card className="text-left" key={result.id}>
                        <Row>
                        
                        <Col lg={9}>
                        <Card.Header as ="h3" dangerouslySetInnerHTML={ {__html: result.name} }></Card.Header>
                        <Card.Body>
                            {/* <Card.Title>Special title treatment</Card.Title> */}
                            <Card.Subtitle className="mb-2 text-muted">Category:{result.category}</Card.Subtitle>
                            <ShowMoreText
                                                /* Default options */
                                                lines={3}
                                                more=''
                                                onClick={this.executeOnClick}
                                                expanded={false}
                                                width={500}
                            >
                            <Card.Text
                            dangerouslySetInnerHTML={ {__html: result.headline} }>
                            </Card.Text>
                            </ShowMoreText>
                            <Button variant="success" id="details-btn" className="text-center">View details</Button>
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
                         </Container>
                    )})}
                
                                                  
            </div>
        )
    }
}
export default CategoryDetails ;
