import React, { Component } from 'react'
import axios from 'axios';
import {Container,Jumbotron} from 'react-bootstrap'
class Details extends Component {
    state={ 
    data:[]
    }

    componentDidMount(){
       axios.get(`https://aniket1999.pythonanywhere.com/en-gb/division/${this.props.match.params.id}/company/`)
        .then(data=>{
            // console.log(data);
            this.setState({
               data:data.data
            });
            console.log(this.state)
        });
    }
    render() {
        const details =this.state.data;
        return (
            <div>
                    {details&&details.map(detail=>{
                        return(
                            <Container>
                                <Jumbotron>
                                  
                                </Jumbotron>
                                {detail.name}
                            </Container>
                                
                            
                        )
                    })}
            </div>
        )
    }
}
export default Details;
