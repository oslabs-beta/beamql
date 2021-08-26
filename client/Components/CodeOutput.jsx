import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 50,
      padding: '30px 30px',
    },
  });

const styles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%'
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%'
        },
    }
});

function CodeOutput () {
    const classes = styles();
    return (
  <div id="codebox">
    <TextField
          id="outlined-multiline-static"
          fullWidth={true}
          label="Output"
          multiline
          color='white'
          rows={32}
          className={classes.root}
          inputProps={{className: classes.root}}
          InputLabelProps={{className: classes.root}}
          defaultValue="Code Here"
          variant="outlined"
        />
        </div>
      
       
    )
};

export default CodeOutput;