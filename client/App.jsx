import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UriEntry from './Components/UriEntry.jsx';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import CodeOutput from './Components/CodeOutput.jsx';
import CodeOutputButtons from './Components/CodeOutputButtons.jsx';
import Diagram from './Components/Diagram.jsx';
import Docs from './Components/Docs.jsx';
import Team from './Components/Team.jsx';

// | App (contains navbar)
//   |URI Entry
//   |Codebox
//   |Diagram

function App() {
  const [database, setDatabase] = useState({
    allTables: {},

    foreignKeys: [],
    primaryKeys: [],
    completeSchemaString: ' ',
    resolvers: ' ',
  });
  const [renderSchema, setRenderSchema] = useState(true);

  const gTD = () => {
    axios
      .post('/api/uri', {
        uri:
          document.getElementById('filled-basic').value ||
          'postgres://vdnvhfkq:sYiMTdCmk1vs2br_eUrrmX1unPvfucdW@batyr.db.elephantsql.com/vdnvhfkq',
      })
      .then((response) => {
        // handle success
        document.getElementById('filled-basic').value = '';
        setDatabase(response.data);
        document.getElementById('outlined-multiline-static').value =
          database.completeSchemaString;
      })
      .catch((error) => {
        // handle error

        console.log(error);
      });
  };

  const changeRender = (schema) => {
    if (schema === false) {
      setRenderSchema(false);
      document.getElementById('outlined-multiline-static').value =
        database.resolvers;
    } else {
      setRenderSchema(true);
      document.getElementById('outlined-multiline-static').value =
        database.completeSchemaString;
    }
  };

  return (
    <Router>
      <div className='header'>
        <Link to='/'>
          <img id='logo' src='./assets/logo.png' />
        </Link>
        <div className='topButtons'>
          <Link to='/docs'>
            <button className='login-btn'> Docs </button>
          </Link>

          <a
            href='https://github.com/oslabs-beta/beam-corp'
            target='_blank'
            rel='noreferrer'
          >
            <button>Github</button>
          </a>
          <Link to='/team'>
            <button>Team</button>
          </Link>
        </div>
        <ThemeProvider theme={theme}>
          <UriEntry gTD={gTD} />
        </ThemeProvider>
      </div>

      <Switch>
        <Route exact path='/'>
          <img id='gif' src='./assets/getstarted.gif' alt='Get Started' />
          {/* <h1 id="gifheader">Getting Started</h1> */}
        </Route>
        <Route exact path='/docs'>
          <Docs />
          <img
            id='gif'
            style={{ marginRight: '30px', width: '50vw' }}
            src='./assets/getstarted.gif'
            alt='Get Started'
          />
        </Route>
        <Route path='/visualize'>
          <div id='OutputBox'>
            <Diagram id='outputRight' data={database} />
            <div id='outputLeft'>
              <CodeOutputButtons
                database={database}
                renderSchema={renderSchema}
                changeRender={changeRender}
              />
              <CodeOutput database={database} renderSchema={renderSchema} />
            </div>
          </div>
        </Route>
        <Route exact path='/team'>
          <Team />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
