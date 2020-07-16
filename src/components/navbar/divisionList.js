import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap';
import axios from 'axios';
import './navbar.css'
export default class DivisionList extends Component {
    state={
        divisions:[]
    }
     componentDidMount(){
        axios.get(`https://aniket1999.pythonanywhere.com/en/division/`)
        .then(res=>{
            this.setState({
                divisions:res.data
            })
            console.log(this.state);
                })
     }
    render() {
       const divisions = this.state.divisions;
        return (
            <div>
                {divisions && divisions.map(division =>{
                    return(
                     <Dropdown key={division.id} className="text-center" id="style-explore">
                     <Dropdown.Toggle variant="light" >
                       Explore
                     </Dropdown.Toggle>
                   
                     <Dropdown.Menu>
                     <Dropdown.Item href={'/detail/'+division.path}>{division.headline}</Dropdown.Item>
                    </Dropdown.Menu>
                 
                   </Dropdown>
                    )
                })}
            </div>
        )
    }
}
