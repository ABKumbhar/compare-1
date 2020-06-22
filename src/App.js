import React from 'react';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom';
import Top from './components/navbar/navbar'; 
import InForm from './components/authentication/signIn'
import HomeContent from './components/layout/homeContent'
import Details from './components/listing/contentDetails'
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
