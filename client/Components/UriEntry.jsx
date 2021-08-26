import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
      margin: '20px',
      height: '55px',
      color: 'black',
    },
  });

  const styles = {
      input: {
        color: 'white',
        'background-color': 'white'
      }
  };



export default function UriEntry () {
    const classes = useStyles();
    return (
        <div id='uri-entry'>
        <form  id="uribox" noValidate autoComplete="off">
        <TextField className={classes.root} id="filled-basic" InputProps={{className: classes.input}} label="Enter database URI" variant='filled'/>
            <Link to='/visualize' >
            <Button className={classes.root} variant="contained" size="small">
                Submit
            </Button>
            </Link>
        
        <FormControl className={classes.root} variant="filled">
        <InputLabel id="demo-simple-select-filled-label" >Sample DB</InputLabel>
        <Select style={{'minWidth': 140}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          autoWidth={true}
          value={'27'}
          onChange={()=>console.log('click')}
          label='Sample DB'
        >
          <MenuItem value={10}>One</MenuItem>
          <MenuItem value={20}>Two</MenuItem>
          <MenuItem value={30}>Three</MenuItem>
        </Select>
        </FormControl>
        </form>
              <div>
       {/* <ButtonGroup id="Selection"size="large" color="primary" aria-label="large outlined primary button group">
   <Button>One</Button>
   <Button>Two</Button>
   <Button>Three</Button>
 </ButtonGroup> */}
        </div>
        </div>
    )
}
