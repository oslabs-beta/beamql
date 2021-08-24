import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './User/Login.jsx';
import Signup from './User/Signup.jsx';
import UriEntry from './Components/UriEntry.jsx';
import Graph from './Components/Graph.jsx';
import Navigation from './Components/Navigation.jsx';
import ConversionBox from './Components/ConversionBox.jsx';
import PositionsTable from './Components/PositionsTable.jsx'
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

// | App
//   |Graph (Graph) (only accesses database?)
//   |StateHolder
//     |ConversionBox
//     |ChoiceBox

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr1: 'USD', //USD
      curr2: 'EUR', //EUR
      value: '1', //your amount
      conversionRate: .845, //test rate, will be overwritten by state change
      converted: '',
      history: '', //your amount * conversionrate
      basecurr: 'USD',
      portfolio: [],
      allRates: {}
    };
    this.curr1Change = this.curr1Change.bind(this);
    this.curr2Change = this.curr2Change.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.getPortfolio = this.getPortfolio.bind(this);
    this.baseCurrChange = this.baseCurrChange.bind(this);
  }

  getPortfolio() {
    axios('/user/getPort')
      .then(res => {
        console.log('res looks like this', res)
        console.log('res.data looks like this', res.data)
        this.setState({portfolio: res.data})
      })
      .then(()=> {
        console.log('this is state', this.state)
      })
      .catch(err => {
        console.log('axios caught in getPortfolio on App.jsx', err)
      })
  }

  componentDidMount() {
    // const x = Promise.resolve(this.setState({ value: event.target.value }));
    axios
      .post('http://localhost:3000/currencyApi', {
        curr1: this.state.curr1,
        curr2: this.state.curr2,
      })
      .then((response) => {
        this.setState({ conversionRate: response.data.info.rate });
        this.setState({ history: response.data.history });
      })
      .catch((error) => {
        console.log('Value change error!!', error, ':(');
      });

      axios
      .post('/getAllRates', {
        basecurr: this.state.basecurr
      })
      .then(response => {
        this.setState({ allRates: response.data.rates });
      })
      .then(() => this.getPortfolio())
      .then(()=> console.log(this.state))
      .catch((error) => {
        console.log('base curr change error!!', error, ':(');
      });
      
    this.getPortfolio();

  }
  curr1Change(event) {
    // goes to ChoiceBox
    // res.locals.history
    // res.locals.rate
    this.setState({ curr1: event.target.value });
  }

  curr2Change(event) {
    // goes to ChoiceBox
    this.setState({ curr2: event.target.value });
  }

  baseCurrChange(event) {
   this.setState({ basecurr: event.target.value });
   // https://api.exchangeratesapi.io/v1/latest?access_key=1ffa62edcf0ab7a273524c03abf11876&base=USD
   // object.rates
   const x = Promise.resolve(this.setState({ basecurr: event.target.value }));
    x.then(() => {
      axios
        .post('/getAllRates', {
          basecurr: this.state.basecurr
        })
        .then(response => {
          this.setState({ allRates: response });
        })
        .then(() => this.getPortfolio())
        .then(()=> console.log(this.state))
        .catch((error) => {
          console.log('base curr change error!!', error, ':(');
        });
    });
   
  }
  valueChange(event) {
    
    const x = Promise.resolve(this.setState({ value: event.target.value }));
    x.then(() => {
      axios
        .post('http://localhost:3000/currencyApi', {
          curr1: this.state.curr1,
          curr2: this.state.curr2,
        })
        .then((response) => {
          this.setState({ conversionRate: response.data.info.rate });
          this.setState({ history: response.data.history });
        })
        .catch((error) => {
          console.log('Value change error!!', error, ':(');
        });
    });
  }

  render() {
    return (
      <Router>
        <div className="header">
          <div className="topButtons">
            <img id="logo" src='./dist/logo.png' />
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
            
      </Router>
    );
  }
}

export default App;