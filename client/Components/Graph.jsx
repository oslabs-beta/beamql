import React, { Component } from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from 'recharts'; // exampleLine built out under Tooltip see line136 // amazing documentation https://recharts.org/en-US/guide/getting-started
// const React, { Component } = require('react');
// const render = require('react-dom');
// const {
//   ResponsiveContainer,
//   Tooltip,
//   AreaChart,
//   Area,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Line,
// } = require('recharts');

class Graph extends Component {
  constructor(props) {
    super(props);
    this.weeks = this.weeks.bind(this);
    this.months = this.months.bind(this);

    this.state = {
      toWeekView: false,
    };
  }

  weeks(event) {      //
    this.setState({ toWeekView: true });
  }

  months(event) {
    this.setState({ toWeekView: false });
  }

  render() {
    const data = [];      // month data
    let week = [];
    for (let el in this.props.info.history) {
      data.push({
        date: el.slice(5),      // remove year for graph view
        value:
          this.props.info.history[el][this.props.info.curr2] *
          this.props.info.value,
      });
    }
    week = data.slice(data.length - 7);     // grab last seven days
    // for next team:
      // consider turning AreaChart to LineChart if filled in color under linearGradient unwanted. test by uncommenting <stop>s in linearGradient. ResponsiveContainer can be taken out if chart is set to fixed dimensions.
    if (this.state.toWeekView) {      // hacky last minute solution, apologies, line 99 for else
      return (
        <div className="build">
          <div className="wrapper2">
            <ResponsiveContainer width="90%" height={400}>
              <AreaChart data={week}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    {/* <stop offset="0%" stopColor="#00d8ff" stopOpacity={0.5} />
                  <stop offset="75%" stopColor="#00d8ff" stopOpacity={0.1} /> */}
                  </linearGradient>
                </defs>

                <Area
                  dataKey="value"
                  stroke="#00d8ff"
                  strokeWidth={3}
                  fill="url(#color)"
                />

                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={20}
                  angle={90}
                  height={50}
                />

                <YAxis
                  datakey="value"
                  tickLine={false}
                  tickCount={4}
                  domain={['auto', 'auto']}
                  // domain = {[dataMin=>(dataMin * .98), dataMax=>(dataMax* 1.02)]}
                  tickFormatter={(number) => `${number.toFixed(2)}`}
                />

                <Tooltip />
                {/* <Line type="monotone" dataKey="bitcoin" stroke="#82ca9d"/> //if given 1+ point of comparison // MAY WANT TO CONSIDER if comparing one trend with the next */}
                <CartesianGrid
                  opacity={0.1}
                  vertical={false}
                  strokeDasharray="3 3"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="butt">
            <button onClick={this.weeks}>Week</button>
            <button onClick={this.months}>Month</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="build">
          <div className="wrapper2">
            <ResponsiveContainer width="90%" height={400}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    {/* <stop offset="0%" stopColor="#00d8ff" stopOpacity={0.5} />
                  <stop offset="75%" stopColor="#00d8ff" stopOpacity={0.1} /> */}
                  </linearGradient>
                </defs>

                <Area
                  dataKey="value"
                  stroke="#00d8ff"
                  strokeWidth={3}
                  fill="url(#color)"
                />

                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={20}
                  angle={90}
                  height={50}
                />
                <YAxis
                  datakey="value"
                  tickLine={false}
                  tickCount={4}
                  domain={['auto', 'auto']}
                  // domain = {[dataMin=>(dataMin * .98), dataMax=>(dataMax* 1.02)]}
                  tickFormatter={(number) => `${number.toFixed(3)}`}
                />
                <Tooltip />
                {/* <Line type="monotone" dataKey="bitcoin" stroke="#82ca9d"/> //if given 1+ point of comparison */}
                <CartesianGrid
                  opacity={0.1}
                  vertical={false}
                  strokeDasharray="3 3"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="butt">
            <button onClick={this.weeks}>Week</button>
            <button onClick={this.months}>Month</button>
          </div>
        </div>
      );
    }
  }
}

export default Graph;
