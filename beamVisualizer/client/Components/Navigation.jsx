import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from '../User/Login.jsx';
import Signup from '../User/Signup.jsx';
import { Redirect } from 'react-router-dom';

class Navigation extends Component {
  // need state to keep track of redirect
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      failedLogin: false, 
      currentpage: 'home',
    };
    
  }
  //need function to update the state on what is clicked


  render() {
  if (this.state.currentpage === 'home') {
    return (
      <div className="header">
        <div className="topButtons">
          <div className="leftButtons">
            <button
              className="signup-btn"
              onClick={(event) => {
                console.log('trying to send you to singup');
                console.log(this.state);
                this.setState({ currentpage: 'signup' });}}
            >
              {' '}
              Signup{' '}
            </button>
            <button
              className="login-btn"
              onClick={(event) => (window.location.href = '/login')}
            >
              {' '}
              Login{' '}
            </button>
          </div>
          
          <div className="rightButtons">
            <button>Learn More</button>
            <button>Contact Us</button>
          </div>
        </div>
        <div>
        
        </div>
      </div>
    );
  }
    if (this.state.currentpage === 'signup') {
      return ( <Redirect to='/signup'/>
    );
  }

// if (this.state.currentpage === 'signup') {
//  return ( <Redirect to='/signup' >
// );

  }
}

export default Navigation;
