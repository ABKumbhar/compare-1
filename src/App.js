import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from'react-router-dom';
import Top from './components/navbar/navbar'; 
import Register from './components/authentication/Register'
import SigninForm from './components/authentication/signIn'
import HomeContent from './components/layout/homeContent'
import Details from './components/listing/contentDetails'
import CategoryDetails from './components/Categories/CategoryDetails'
import SearchComponent from './components/navbar/SearchComponent';
import { Provider } from 'react-redux';
import {Provider as AlertProvider} from 'react-alert';
import store from './store';
import { loadUser } from './actions/auth';
import {useEffect} from 'react'
import AlertTemplate from 'react-alert-template-basic';
import { Modal, ModalHeader } from 'reactstrap';
import Alerts from './components/Alerts'
import i18n from './i18next';
import { Dropdown } from 'react-bootstrap';

 
class App extends Component {
   state={
     language:"en"
   }
    componentDidMount() {
      store.dispatch(loadUser());
    }  
    
    handleClick=(lang,e)=>{
      e.preventDefault();
      i18n.changeLanguage(lang);
      this.setState({
        language:e.target.name
      })
      console.log(this.state)
    }
  
render(){
  const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

 
  return (

    <div className="App">
    
      <Provider store={store}>
       <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <Top/>
        <Dropdown >
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Languages
          <i className="fas fa-globe"></i>
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
        <Dropdown.Item onClick={(e)=>this.handleClick('fr',e)} name='fr'>French</Dropdown.Item>
          <Dropdown.Item onClick={(e)=>this.handleClick('de',e)} name='de'>German</Dropdown.Item>
          <Dropdown.Item onClick={(e)=>this.handleClick('ja',e)} name='ja'>Japanese</Dropdown.Item>

          <Dropdown.Item onClick={(e)=>this.handleClick('nl',e)}name='nl'>Dutch</Dropdown.Item>
        </Dropdown.Menu>
    
      </Dropdown>
       <Alerts/>
        
        <Switch>
          <Route path="/signout" />
          <Route exact path ="/" component={HomeContent}/>
          <Route path ="/register" component={Register}/>
          <Route path ="/login" component={SigninForm}/>
          
          <Route path="/en/company/:slug" component={Details}></Route>
          
          <Route path="/search" component={SearchComponent}/>

          <Route path="/category/:slug" component={CategoryDetails}/>
        </Switch>
      </Router>
      </AlertProvider>
      </Provider>

    </div>
  );
}}

export default App;
