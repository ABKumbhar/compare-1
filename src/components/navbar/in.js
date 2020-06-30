import React,{ Component } from 'react'
import {Nav} from 'react-bootstrap';
<<<<<<< HEAD
import './navbar.css'
function SignIn() {
    return (
        <div>
            <Nav.Link id="style-link"href="/signin">Sign Up</Nav.Link>
        
=======
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import './navbar.css'
import { components } from 'react-select';

export class SignIn extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
      };
    render()
    {    const { isAuthenticated, user } = this.props.auth;
    
    const authLinks = (
            <div>
            <span>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
            </span>

            <Nav.Link>
            <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">
              Logout
            </button>
            </Nav.Link>
            </div>
        
      );
  
      const guestLinks = (
          <div>
            <Nav.Link href="/register" >
              Register/Login
            </Nav.Link>
            </div>
      );
  
    return (
        <div>
          {isAuthenticated ? authLinks : guestLinks}

>>>>>>> 6211c0bc7c7d1b6aeb1d60c586bccdb07e734955
        </div>
    )
}}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { logout })(SignIn);
