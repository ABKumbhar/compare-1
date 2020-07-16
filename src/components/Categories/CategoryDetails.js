import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {Card,Row,Col,Button,Image, Container} from 'react-bootstrap'
import {connect} from 'react-redux'

class CategoryDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            results:[],
        }
    } 

     componentDidMount(){
        const slug= this.props.match.params.slug;
        console.log(slug);
         axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/category/${slug}/division/`)
            .then(res=>{
                // console.log(res);
                this.setState({
                    loading:true,
                    results:res.data,
                   
                });
                console.log(this.state)
            })
            
    }


    render() {
        const results =this.state.results;
        return (
            <div>

                {results && results.map(result=>{
                    return(
                    <Container className="mt-5">
                        <Link to={'/detail/' + result.path} key={result.id}>
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
                         </Container>
                    )})}
                
                                                  
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      language_select: state.language.language_select
    }
  }
export default connect(mapStateToProps)(CategoryDetails) ;
