import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const styles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      border: '2px solid white',
      width: '100%',
      position: 'absolute',
      right: '0',
      height: '100%',
      spellCheck: 'false',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      border: '2px solid white',
      width: '100%',
      position: 'absolute',
      right: '0',
      height: '100%',
      spellCheck: 'false',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      border: '2px solid white',
      width: '100%',
      position: 'absolute',
      right: '0',
      height: '100%',
      spellCheck: 'false',
    },
  },
});

function CodeOutput({ database, renderSchema }) {
  const classes = styles();
  return (
    <div id="codebox">
      <TextField
        id="outlined-multiline-static"
        fullWidth={true}
        label="Output"
        multiline
        rows={Math.floor(window.innerHeight / 28.2)}
        className={classes.root}
        inputProps={{ className: classes.root }}
        InputLabelProps={{ className: classes.root }}
        defaultValue={
          renderSchema ? database.completeSchemaString : database.resolvers
        }
        variant="outlined"
      />
    </div>
  );
}

export default CodeOutput;
