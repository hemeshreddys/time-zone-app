import React, { Component } from 'react';
import './App.css';
import DigitalTimeZone from './DigitalTimeZone';

class App extends Component {
  render() {
    const container = {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100vw',
      height:'100vh',
      flexWrap:'wrap'
  }
    return (
      <div style={container}>
        <DigitalTimeZone tZone="US/Pacific" name="America"/>
        <DigitalTimeZone tZone="Asia/Kolkata" name="India"/>
        <DigitalTimeZone tZone="Australia/Melbourne" name="Melbourne"/>
      </div>
    );
  }
}

export default App;
