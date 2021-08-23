import React, { Component } from 'react';
import { render } from 'react-dom';

class ConversionBox extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="Inner_wrapper">
            <div className="amountToConvert">
              <label className="">Your amount</label>
              <div className="amountDisplay"> {this.props.info.value}</div>
            </div>

            <div className="CurrToConvert">
              <label className="">Your input currency</label>
              <div className="inputDisplay"> {this.props.info.curr1}</div>
            </div>
          </div>

          <div className="convertedAmount">
            <label className=""></label>
            <div className="Outputer">
              {' '}{(this.props.info.value * this.props.info.conversionRate).toFixed(3)}{' '} in {this.props.info.curr2}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ConversionBox;
