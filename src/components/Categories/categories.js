import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './categories.css'
import {motion} from 'framer-motion'
import CategoryList from './CategoryList'
class Categories extends Component {
    state={
        categories:[],
        isToggle:false,
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({
            isToggle:!this.state.isToggle
        });
    }
    componentDidMount(){
        axios.get(`https://aniket1999.pythonanywhere.com/en/category/`)
         .then(res=>{
             console.log(res)
             this.setState({
                 categories:res.data
             })
         });
        }
        textVariants={
                hidden:{scale:1},
                visible:{
                  scale:1.1,
                  transition:{duration:1,yoyo:Infinity}
                }
               
        }
         
    render() {
        return (
            <div>
             
              <Card id="card-style">
                  <motion.div
                   variants={this.textVariants}
                   initial="hidden"
                   animate="visible">
                     <Card.Body as="h4" onClick={this.handleClick} className="text-center">Categories 
                     {this.state.isToggle
                     ?  <i class="fas fa-angle-down"></i>
                     :    <i class="fas fa-angle-right"></i>
                     }
                    
                   
                     
                     </Card.Body>
                     </motion.div>
              </Card>
              {this.state.isToggle 
              ?  <CategoryList categories={this.state.categories}/>
              : null 
              }
              
              
            </div>
        )
    }
}

export default Categories;
