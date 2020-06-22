import React from 'react'
import { Card,Row,Col,Image } from 'react-bootstrap';
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
            { categories.map(category =>{
                return(
                  <Row key={category.id}>
                  <Col>
                    <Link to={'/category/' +category.path}>
                      <Card>
                        <Row>
                          <Col lg={8}>
                        <Card.Body id="style-body">{category.name}</Card.Body>
                        <hr/>
                        </Col>
                        <Col lg={4}>
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
              </Row>
                )
            })}
            
        </div>
    )
}
export default CategoryList
