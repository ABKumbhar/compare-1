import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './categories.css';
import CategoryTrendingList from './staticCategories';
import CategoryNontrendingList from './CategoryList';


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
            //  console.log(res)
             this.setState({
                 categories:res.data,
             })
             console.log(this.state)
         });
        }
        
         
    render() {
        const categories= this.state.categories;
        return (
            <span>
            <h2 className="text-center mb-5 style-choose">Choose from top categories.</h2>
               <CategoryTrendingList categories={categories}/>
               {this.state.isToggle 
                      ?  <CategoryNontrendingList categories={this.state.categories}/>
                      : null 
                     }
                <Card id="card-style">
                  <div>
                      
                     {this.state.isToggle
                     ? 
                         
                         <Card.Body as="h5" onClick={this.handleClick} className="text-center">View Less
                          <i className="fas fa-angle-up"></i>
                          </Card.Body>                     


                     :    
                          <Card.Body as="h5" onClick={this.handleClick} className="text-center">View More
                           <i className="fas fa-angle-down"></i>
                           </Card.Body>                     
                    }
                    
                   
                     
                    
                     </div>
                     </Card> 
                       
            </span>
        )
    }
}

export default Categories;
