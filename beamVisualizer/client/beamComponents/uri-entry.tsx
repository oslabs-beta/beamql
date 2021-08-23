import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import styles from '../styles/Home.module.css';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';
import { spacing } from '@material-ui/system';


const styleslocal = theme => ({
  buttonPadding: {    
    padding: '10px',   
  },
});


function UriEntry () {
    return (
        <div className={styles.uriDiv} >
        <form className={styles.uri} noValidate autoComplete="off">
        <TextField id="filled-basic" style={{color:'white'}}label="Enter database URI" variant='filled' />
        
            <Button className={styles.buttonPadding} variant="contained" color="primary" size="small">
                Submit
            </Button>
        
        <FormControl variant="filled" className={styles.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Sample DB</InputLabel>
        <Select style={{minWidth: 140}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          autoWidth={true}
          value={'27'}
          onChange={()=>console.log('click')}
          label='Sample DB'
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        </form>
        </div>
    );
}   

export default withStyles(styleslocal)(UriEntry);
