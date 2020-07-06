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
          
            return(
               
                 
                  <Col md={6}lg={3} key={category.id}>
                    {!category.trending?
                  <Link to={'/category/' +category.path}>
                  
                   <Card id="style-body">
                     <Row>
                       <Col xs={10} md={7} lg={9}>
                       <Card.Body >{category.name}</Card.Body>
                     
                     </Col>
                     <Col xs={2} md={5} lg={3}>
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
                  :''}
              </Col>
            )
            }
     
            )}
        </Row>
        

)
}
export default CategoryNontrendingList;