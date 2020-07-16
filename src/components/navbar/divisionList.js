import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap';
import axios from 'axios';
import './navbar.css'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
class DivisionList extends Component {
    constructor(props){
        super(props);
    }
    state={
        divisions:[]
    }
     componentDidMount(){
        axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/division/`)
        .then(res=>{
            this.setState({
                divisions:res.data
            })
            console.log(this.state);
                })
            }

            componentDidUpdate(PrevProps){
                if(PrevProps.language_select !== this.props.language_select){
                axios.get(`https://aniket1999.pythonanywhere.com/${this.props.language_select}/division/`)
                .then(res=>{
                    this.setState({
                        divisions:res.data
                    })
                    console.log(this.state);
                        })}
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
                     <Dropdown.Item > <Link to = {'detail/' + division.path} >{division.headline} </Link></Dropdown.Item>
                    </Dropdown.Menu>
                 
                   </Dropdown>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      language_select: state.language.language_select
    }
  }

  export default connect(mapStateToProps)(DivisionList);