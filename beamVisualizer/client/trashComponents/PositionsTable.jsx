import React, { Component } from 'react';
import { render } from 'react-dom';
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

// https://material-ui.com/components/tables/

class PositionsTable extends Component {
  constructor (props) {
    super(props);

  }
  
  // are we receiving table info as props here 
  
  
  render() {
    const rows = []
    for(let i = 0; i < this.props.info.portfolio.length; i++) {
      let el = this.props.info.portfolio[i];
      rows.push({currency: el.currency_acronym, 
        local_value: (Math.round(100*el.local_value)/100).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
        base_value: (Math.round(100*el.local_value / this.props.info.allRates[el.currency_acronym])/100).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      })
    }
    
    // {currency: 'USD', base_value: 1, usd_value: 1}, 
    //     {currency: 'JPY', base_value: 100, usd_value: 1},
    //     {currency: 'EUR', base_value: 120, usd_value: 100},
    // const rows = this.props
    // console.log('this.props.info portfolio is here', this.props.info.portfolio)
    // // const rows = this.props.info.portfolio.map(el => {
    // //   return { currency: el.currency_acronym, 
    // //           local_value: el.local_value,
    // //           base_value: el.local_value * this.props.info.allRates[el.currency_acronym] }
    // // })
    // console.log(rows, 'rows are here in positionstable')
    
    return (
      <>
      <div className="wrapper_on_table">
        <TableContainer component={Paper}>
          <Table className='tabletest' aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">Value(local)</TableCell>
                <TableCell align="right">Value(base)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.local_value}>
                  <TableCell component="th" scope="row">
                    {row.currency}
                  </TableCell>
                  <TableCell align="right">{row.local_value}</TableCell>
                  <TableCell align="right">{row.base_value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </>
    );
  }
}

export default PositionsTable;

/*

<>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">Value(in base currency)</TableCell>
                <TableCell align="right">Value(USD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.currency}>
                  <TableCell component="th" scope="row">
                    {row.currency}
                  </TableCell>
                  <TableCell align="right">{row.base_value}</TableCell>
                  <TableCell align="right">{row.usd_value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>

*/