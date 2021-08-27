import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 50,
//       padding: '30px 30px',
//     },
//   });

// const styles = makeStyles({
//     root: {
//           borderColor: "white",
//           width: '100%',
//           position: 'absolute',
//           right: '0',
//           height: '50px'
//     }
// });

function CodeOutput () {
    //const classes = styles();
    //className={classes.root}
    return (
        <div id="Selection">
        
        <button >Schema</button>
        <button >Resolvers</button>
        <button >Copy</button>

        </div>
    )
};

export default CodeOutput;