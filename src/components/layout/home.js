import React, { Component } from 'react';
import {Jumbotron,Container, Image,Carousel} from'react-bootstrap';
import './home.css';
import axios from 'axios';


// Blogs and footer

class Home extends Component {
   state={
       trendingBlogs:[]
   }
   componentDidMount(){
       axios.get(`https://aniket1999.pythonanywhere.com/en/blog/trending`)
       .then(res=>{
           // console.log(res)
           this.setState({
             trendingBlogs:res.data
           })
           console.log(this.state)
       });
   }
    render() {
        return (
            <div>
                 {/* Blogs */}
               
                 <Container id="container">
                     <div>
                    <Carousel>
                        <Carousel.Item>
                            
                        <Jumbotron className="top-jumbo">
                        <div className="text">
                        <h3>
                            <strong>Find Your Top Option Amongst The Best</strong>
                        </h3>
                        <p>
                            Look through your favourite category to find the top and best choice.
                            <br/><span>Compare the list and decide with no daze.</span>
                        </p>
                        </div>
                        </Jumbotron>
                        </Carousel.Item>
                        {this.state.trendingBlogs && this.state.trendingBlogs.map(blog=>{
                            return(
                                <Carousel.Item key={blog.id}>
                                <Image
                                className="d-block w-100"
                                src={`https://aniket1999.pythonanywhere.com/${blog.photo}`} text="Second slide"
                                alt="Second slide"
                                />
    
                                <Carousel.Caption>
                                  <h3>{blog.headline}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    </div>
                    </Container>
             </div>
        )
    }
}
export default Home;
