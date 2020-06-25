import React from 'react'
import {Card,Row,Col,Image } from 'react-bootstrap';
import {Link } from 'react-router-dom'
import {motion} from 'framer-motion';
import './categories.css'
const ImgVariants = {
  hidden:{rotate:-15},
  visible:{
    rotate:0,
    transition:{duration:1,yoyo:Infinity}
  }
}
const CategoryList=({categories})=> {
    return (
        <div>
          <Row className="ml-5">
            { categories.map(category =>{
                return(
                  <Col lg={4}>
                  <Link to={'/category/' +category.path}>
                       <Card >
                         <Row>
                           <Col xs={10}lg={8}>
                         <Card.Body id="style-body">{category.name}</Card.Body>
                         
                         </Col>
                        <Col xs={2}lg={4}>
                            <motion.div
                           variants={ImgVariants}
                           initial="hidden"
                          animate="visible"
                        >
                             <Image src={category.logo} alt="" id="image"/>
                             </motion.div>
                         </Col>
                         </Row>
                       </Card>
                      </Link>
                  </Col>
             
                )
            })}
            </Row>
            
        </div>
    )
}
export default CategoryList
