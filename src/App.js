import React, { Component } from 'react';
import './App.css';
import DigitalTimeZone from './DigitalTimeZone';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DigitalTimeZone tZone="US/Pacific"/>
      </div>
    );
  }
}

export default App;
