import React, { Component } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './categories.css'
import CategoryList from './CategoryList'
class Categories extends Component {
    state={
        categories:[]
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
    render() {
        return (
            <div>
              <Card id="card-style">
                     <Card.Body as="h4">Categories</Card.Body>
              </Card>
               <CategoryList categories={this.state.categories}/>
            </div>
        )
    }
}

export default Categories;
