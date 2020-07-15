import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './categories.css';
import CategoryTrendingList from './staticCategories';
import CategoryNontrendingList from './CategoryList';
import {connect} from 'react-redux'


class Categories extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            categories:[],
            isToggle:false,
            };
      }
    
  
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({
            isToggle:!this.state.isToggle
        });
    }
    componentDidMount(){
        axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/category/`)
         .then(res=>{
            //  console.log(res)
             this.setState({
                 categories:res.data,
             })
             console.log(this.state)
         });
        }
    
    componentDidUpdate(prevProps){
        if(this.props.language_select !== prevProps.language_select)
        {
            axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/category/`)
            .then(res=>{
               //  console.log(res)
                this.setState({
                    categories:res.data,
                })
                console.log(this.state)
            });
    
        }
    }
        
         
    render() {
        const categories= this.state.categories;
        return (
            <span>
            <h2 className="text-center mb-5 style-choose">Choose from top Categories</h2>
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
const mapStateToProps = state => {
    return {
      language_select: state.language.language_select
    }
  }
export default connect(mapStateToProps)(Categories);
