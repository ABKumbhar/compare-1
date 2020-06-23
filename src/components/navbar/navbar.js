
import React, { Component,useState,useEffect } from 'react';
import SignIn from './in';
import SignOut from './out';
import './navbar.css'
import {Navbar,Form,FormControl,Button} from 'react-bootstrap';
import {Input} from 'reactstrap'
import SearchComponent from './SearchComponent';
import {Link } from 'react-router-dom'
import { navigate } from "@reach/router"
import HomeContent from '../layout/homeContent'
import axios from 'axios'
function Top() {
  
          const [buttn,setbuttn] = useState('')
    const [item, setItem] = useState([])
    const [toggle,setToggle] = useState(0)
    useEffect(() => {
        axios
        .get(`https://aniket1999.pythonanywhere.com/list?search=${buttn}`)
        .then((res)=> 
           {console.log(res)
        setItem(res.data)
        setToggle(1)  
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
          
         <Navbar bg="light" variant="light" expand="lg"className="navbar" >
            <Navbar.Brand href="/" id="brand">Bonjour Techies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                   
                <Form inline  className="ml-auto">
                    <Input type="text" placeholder="Look for the best...." className="mr-sm-2" onChange={e => setbuttn(e.target.value)} />
                    <Link to={{pathname:'/search', aboutProps:item}}><Button variant="danger"><i className="fas fa-search"></i></Button></Link>
    
                        <SignIn/>
                        <SignOut/>
                </Form>
            </Navbar.Collapse>
        </Navbar>

</div>
        )
    
}
export default Top;