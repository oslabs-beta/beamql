import React, { Component, Image } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UriEntry from './Components/UriEntry.jsx';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import CodeOutput from './Components/CodeOutput.jsx';
import CodeOutputButtons from './Components/CodeOutputButtons.jsx';
import CustomNodeExample from './Components/Diagram.jsx';

// | App (contains navbar)
//   |URI Entry
//   |Codebox
//   |Diagram

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      primaryKeys: [],
      foreignKeys: []
    };
  }

  // getTableData() {
  //   axios.get('/api/uri')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  //   this.setState(state => {
  //     state.columns
  //   })
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });
  // }


  render() {
    return (
      <Router>
        <div className="header">
        <Link to='/'>
            <img id="logo" src='./dist/logo.png' />
            </Link>
          <div className="topButtons">
           
              <Link to='/signup'>
                <button
                  className="signup-btn"
                  // onClick={(event) => {
                  //   console.log('trying to send you to singup');
                  //   console.log(this.state);
                  //   this.setState({ currentpage: 'signup' });}}
                >
                  {' '}
                  Sandbox{' '}
                </button>
              </Link>

              <Link to="/login">
                <button
                  className="login-btn"
                >
                  {' '}
                  Docs{' '}
                </button>
              </Link>
            
            
              <button>Github</button>
              <button>Squad</button>
            
          </div>
          <ThemeProvider theme={theme}>
        <UriEntry />
        </ThemeProvider>
      </div>
        
           <Switch>
            <Route exact path='/'>
              <img id='gif' src="./dist/mockgif.gif" />
            </Route>
             <Route exact path="/visualize">
             <CustomNodeExample />
             <CodeOutputButtons />
               <CodeOutput />
             </Route>
  
             
          </Switch> 
      </Router>
    );
  }
}

export default App;