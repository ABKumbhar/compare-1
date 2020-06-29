import React from 'react'
import {Carousel} from 'react-bootstrap';
const BlogTrendingList=({blogs})=>{
    return (
        <div>
            {blogs && blogs.map(blog=>{
                if(blog.trending){
                return(
                    <Carousel>
                    <Carousel.Item>
                        {blog.headline}
                                    <img
                                    className="d-block w-100"
                                    src={blog.photo}text="Second slide"
                                    alt="Second slide"
                                    />
        
                                    <Carousel.Caption>
                                    <h3>{blog.headline}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                     </Carousel.Item> 
                     </Carousel>
                     
                )
                }
            })}
             
        </div>
    )
}
export default BlogTrendingList;
