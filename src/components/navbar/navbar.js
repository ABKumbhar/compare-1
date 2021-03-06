
import React, { Component,useState,useEffect } from 'react';
import SignIn from './in';
import SignOut from './out';
import './navbar.css'
import {Navbar,Form,FormControl,Button, NavItem,Dropdown,Row,Col} from 'react-bootstrap';

import { logout } from '../../actions/auth';
import {Input,Select} from 'reactstrap'
import SearchComponent from './SearchComponent';
import {Link ,Redirect,withRouter} from 'react-router-dom'
import { navigate } from "@reach/router"
import HomeContent from '../layout/homeContent'
import axios from 'axios'
//import Select from 'react-select';
import { connect } from 'react-redux';
import DivisionList from './divisionList';
import {eng,jap,dut,fre,ger} from '../../actions/lang'
//import {DropdownInput} from 'react-dropdown-input';

function Top(props) {
   

    const [buttn,setbuttn] = useState('')
    const [item, setItem] = useState([])
    const [division, setDivision] = useState([])
    const [category, setcategory] = useState([])
    const [company, setCompany] = useState([])
   
     
    
        
  

    useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/${props.language_select}/division`)
        .then((res)=> 
           {console.log(res)
        setDivision(res.data)
    }
         
        )
        .catch((error)=>
        {console.log(error.message)
        }
        )

     ;
      }, [props.language_select]);    
      useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/${props.language_select}/category`)
        .then((res)=> 
           {console.log(res)
        setcategory(res.data)
    }
         
        )
        .catch((error)=>
        {console.log(error.message)
        }
        )

     ;
      }, [props.language_select]);    

      useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/${props.language_select}/company`)
        .then((res)=> 
           {console.log(res)
        setCompany(res.data)
    }
         
        )
        .catch((error)=>
        {console.log(error.message)
        }
        )

     ;
      }, [props.language_select]);  
 
      useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/${props.language_select}/list?search=${buttn}`)
        .then((res)=> 
           {console.log(res)
        setItem(res.data)
    }
         
        )
        .catch((error)=>
        {console.log(error.message)
        }
        )

     ;
      }, [props.language_select,buttn]);
      
      
     const handleKeyPress = (target) => {
        if(target.charCode==13){
          alert("Please click on red search button!")
        } 
      };
      

        return (
    <div>
         <Navbar bg="light" variant="light" className="navbar" >
            <Navbar.Brand><Link to = "/" id="brand">Bonjour Techies</Link></Navbar.Brand>
                {/* <Languages lang={language}/> */}
                {/* {props.language_select} */}
                <Form inline  className="ml-auto input-style">
                <Input type="text" list="cars" placeholder="Look for the best...." className="mr-sm-2 style-holder" onChange={e => setbuttn(e.target.value)} onKeyPress={handleKeyPress} />
                    <datalist id="cars">
                        {buttn && division.map((value) => {return(

                            <option>{value.name}</option>
                        )})}
                        {buttn && category.map((value) => {return(

                       <option>{value.name}</option>
                        )})}
                        {buttn && company.map((value) => {return(

                            <option>{value.name}</option>
                           )})}


                    </datalist>
                    {/* <Input type="search" placeholder="Look for the best...." className="mr-sm-2 input-style" onChange={e => setbuttn(e.target.value)} /> */}
                    <Link to={{pathname:'/search', aboutProps:item}}><Button variant="danger" id="button-style"><i className="fas fa-search"></i></Button></Link>
                     <Link to='/'>
                     <Button variant="light" id="style-home">
                        Home
                     </Button>
                    </Link>
                        <SignIn/>
                        
                </Form>
       <Row>
         <Col>
         <DivisionList/>
      </Col>
      <Col>
      <Dropdown className="text-center style-en"  >
        <Dropdown.Toggle variant="light" id="dropdown-basic" >
        {props.language_select}
          
          <i className="fas fa-globe"></i>
        </Dropdown.Toggle>     
        <Dropdown.Menu>
        <Dropdown.Item  onClick={props.eng} > <Link to="/">English</Link></Dropdown.Item>

<Dropdown.Item  onClick={props.fre} ><Link to="/">French</Link></Dropdown.Item>
  <Dropdown.Item onClick={props.jap} ><Link to="/">Japanese</Link></Dropdown.Item>
  <Dropdown.Item onClick={props.ger} ><Link to="/">German</Link></Dropdown.Item>

  <Dropdown.Item onClick={props.dut}><Link to="/">Dutch</Link></Dropdown.Item>

        </Dropdown.Menu> 
    
      </Dropdown>
      </Col>
          </Row>     
      
        </Navbar>
        
    
</div>
        )
    
}
// const mapStateToProps = (state) => ({
//     auth: state.auth,
//   });
  
// export default connect(mapStateToProps, { logout })(Top);
const mapStateToProps = state => {
    return {
      language_select: state.language.language_select
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      eng: () => dispatch(eng()),
      jap: () => dispatch(jap()),
      fre: () => dispatch(fre()),
      ger: () => dispatch(ger()),
      dut: () => dispatch(dut()),



      
    }
  }
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Top))