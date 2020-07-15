import React from 'react';
import{Row,Col,Image} from 'react-bootstrap';
import './blogs.css'
 const BlogNonTrendingList=({blogs})=> {
    return (
        <div>
        {blogs && blogs.map(blog =>{
        
            return(
                <div key={blog.id}>
                 <a href={blog.url}>
                <Row>
                    <Col xs={5} lg={4}>
                    <div>
                         <Image src={blog.photo} className="blog-image"/>
                    </div>
                    </Col>
                    <Col xs={7} lg={8}>
                       <div className="blog-headline"> {blog.headline} </div>
                    </Col>
            
                </Row>  
                </a>
                <hr/>
                </div>
                
            )
        })}
           
        </div>
    )
}
export default BlogNonTrendingList;