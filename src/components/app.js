import React, { Component } from 'react';
import SingleBar from './single_bar';
import MultiBar from './multi_bar';
import FetchBars from '../containers/fetch_bars';
import Details from './details';

export default class App extends Component {
  render() {
    const values = [
      {
        title: "Data1",
        left: { color: "#007cff", value: 48 },
        right: { color: "#ffe944", value: 240 }
      },
      {
        title: "Data2",
        left: { color: "#007cff", value: 123 },
        right: { color: "#ffe944", value: 123 }
      },
      {
        title: "Data3",
        left: { color: "#007cff", value: 123 },
        right: { color: "#ffe944", value: 123 }
      }
    ];
    
    return (
      <div>
        <h2>Azar Azar - For Qwilt</h2>
        <h4>(1) Single bar:</h4>
        <SingleBar
        title="Data"
        left={{color: "#007cff", value: 48}}
        right={{color: "#ffe944", value: 272}} />
        <h4>(2) Multi bar:</h4>
        <MultiBar
        values={values} />
        <h4>(3) Fetch bar (using redux, just showing off some coding :) ):</h4>
        <FetchBars />
        <h4>(4) Details:</h4>
        <Details />
      </div>
    );
  }
}
