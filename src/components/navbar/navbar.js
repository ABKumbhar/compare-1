
import React, { Component,useState,useEffect } from 'react';
import SignIn from './in';
import SignOut from './out';
import './navbar.css'
import {Navbar,Form,FormControl,Button, NavItem} from 'react-bootstrap';

import { logout } from '../../actions/auth';
import {Input,Select} from 'reactstrap'
import SearchComponent from './SearchComponent';
import {Link } from 'react-router-dom'
import { navigate } from "@reach/router"
import HomeContent from '../layout/homeContent'
import axios from 'axios'
//import Select from 'react-select';
import { connect } from 'react-redux';

//import {DropdownInput} from 'react-dropdown-input';

function Top(props) {
   

    const [buttn,setbuttn] = useState('')
    const [item, setItem] = useState([])
    const [division, setDivision] = useState([])
    const [category, setcategory] = useState([])
    const [company, setCompany] = useState([])
    const options = [
        // ...
        { value: 'Stanford University', label: 'Stanford' },
        // ...
    ];
     
    
        
  

    useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/en/division`)
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
      }, []);    
      useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/en/category`)
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
      }, []);    

      useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/en/company`)
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
      }, []);  

      useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/en/list?search=${buttn}`)
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
      }, [buttn]);


        return (
    <div>
          
         <Navbar bg="light" variant="light" className="navbar" >
            <Navbar.Brand><Link to = "/">Bonjour Techies</Link></Navbar.Brand>

                <Form inline  className="ml-auto input-style">
                <Input type="text" list="cars" placeholder="Look for the best...." className="mr-sm-2 style-holder" onChange={e => setbuttn(e.target.value)}/>
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
           

                        <SignIn/>
                </Form>
    
      
        </Navbar>
        
    
</div>
        )
    
}
const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
export default connect(mapStateToProps, { logout })(Top);