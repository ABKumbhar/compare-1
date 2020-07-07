import React,{ Component } from 'react'
import {Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import { logout } from '../../actions/auth';
import './navbar.css'
import { components } from 'react-select';
import ModalComponent from '../authentication/Modal'
export class SignIn extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
      };
    render()
    {    const { isAuthenticated, user } = this.props.auth;
    
    const authLinks = (
            <div>
            <strong>{user ? `Welcome ${user.username}` : ''}</strong>
           

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
              Register/Login
            </Link>
             <ModalComponent isOpen = {true} />
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
