import React from 'react';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom';
import Top from './components/navbar/navbar'; 
import InForm from './components/authentication/signIn'
import HomeContent from './components/layout/homeContent'
import Details from './components/listing/contentDetails'
import CategoryDetails from './components/Categories/CategoryDetails'
import SearchComponent from './components/navbar/SearchComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Top/>
        <Switch>
          <Route path="/signout" />
          <Route exact path ="/" component={HomeContent}/>
          <Route path ="/signin" component={InForm}/>
          <Route path="/en/company/:slug" component={Details}/>
          
          <Route path="/search" component={SearchComponent}/>

          <Route path="/category/:slug" component={CategoryDetails}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
