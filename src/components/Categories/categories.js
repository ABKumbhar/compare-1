import React, { Component } from 'react'
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
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
                {this.state.categories && this.state.categories.map(category=>{
                    return(
                        <ListGroup horizontal>
                        <ListGroup.Item>{category.name}</ListGroup.Item>
                      </ListGroup>
                    )
                })}
            
             
            </div>
        )
    }
}

export default Categories;
