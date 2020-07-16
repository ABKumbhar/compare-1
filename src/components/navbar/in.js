import React,{ Component } from 'react'
import {Nav,Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { logout } from '../../actions/auth';
import './navbar.css'
import { components } from 'react-select';
import ModalComponent from '../authentication/Modal'
import { Jumbotron } from 'reactstrap';
export class SignIn extends Component {
  state={
    timePassed: false
  }  
  static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
      };
    render()
    { setTimeout(() => {this.setState({timePassed: true})}, 7000)
   
      const { isAuthenticated, user } = this.props.auth;

    
    const authLinks = (
            <div id="style-log">
            <strong>{user ? `Welcome ${user.first_name}` : ''}</strong>
           

            <Nav.Link>
            <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
              Logout
            </button>
            </Nav.Link>
            </div>
        
      );
  
      const guestLinks = (
          <div id="style-auth">
            <Link to="/register" >
             <Button variant="light" >Register/Login</Button>
            </Link>
            {this.state.timePassed ? <ModalComponent isOpen={true}/>:<div></div>}
            </div>
      );
  
    return (
        <div>
          {isAuthenticated ? authLinks : guestLinks}

        </div>
    )
}}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { logout })(SignIn);
