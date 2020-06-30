import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from'react-router-dom';
import Top from './components/navbar/navbar'; 
import Register from './components/authentication/Register'
import SigninForm from './components/authentication/signIn'
import HomeContent from './components/layout/homeContent'
import Details from './components/listing/contentDetails'
import CategoryDetails from './components/Categories/CategoryDetails'
import SearchComponent from './components/navbar/SearchComponent';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import {useEffect} from 'react'


function App() {
useEffect(() => {
  
  return () => {
  
      store.dispatch(loadUser());

  }
}, [])
  return (

    <div className="App">
            <Provider store={store}>

      <Router>
        <Top/>
        <Switch>
          <Route path="/signout" />
          <Route exact path ="/" component={HomeContent}/>
          <Route path ="/register" component={Register}/>
          <Route path ="/login" component={SigninForm}/>

          <Route path="/en/company/:slug" component={Details}/>
          
          <Route path="/search" component={SearchComponent}/>

          <Route path="/category/:slug" component={CategoryDetails}/>
        </Switch>
      </Router>
      </Provider>

    </div>
  );
}

export default App;
