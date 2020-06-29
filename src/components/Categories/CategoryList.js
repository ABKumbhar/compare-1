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


const CategoryNontrendingList=({categories})=>{
  return (
      <Row >
        { categories && categories.map(category =>{
          if(!category.trending){
            return(
               
                 
                  <Col lg={4} key={category.id}>
                  <Link to={'/category/' +category.path}>
                  
                   <Card id="style-body">
                     <Row>
                       <Col xs={10}lg={8}>
                       <Card.Body >{category.name}</Card.Body>
                     
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
            }
     
         }
      )}
        </Row>
        

)
}
export default CategoryNontrendingList;