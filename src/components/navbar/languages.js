import React,{Component} from 'react';
import {Dropdown} from 'react-bootstrap';
class Languages extends Component {
    state=this.props.lang
     clickMe =(e)=>{
         this.props.clickMe(e)
     }
    render(){
    return (
        <Dropdown style={{marginLeft:"700px"}}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Languages
          <i className="fas fa-globe"></i>
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
        <Dropdown.Item onClick={this.clickMe} name="fr">French</Dropdown.Item>
          <Dropdown.Item onClick={this.clickMe} name="de">German</Dropdown.Item>
          <Dropdown.Item onClick={this.clickMe} name="ja">Japanese</Dropdown.Item>

          <Dropdown.Item onClick={this.clickMe}name="nl">Dutch</Dropdown.Item>
        </Dropdown.Menu>
    
      </Dropdown>
    )
    }
}
export default Languages;

