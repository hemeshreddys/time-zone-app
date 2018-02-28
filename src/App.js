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
        <DigitalTimeZone tZone="US/Pacific" name="America" hAndw="150px" digiColor="white"/>
        <DigitalTimeZone tZone="Asia/Kolkata" name="India" hAndw="200px" digiColor="white"/>
        <DigitalTimeZone tZone="Australia/Melbourne" name="Melbourne" hAndw="150px" digiColor="white"/>
      </div>
    );
  }
}

export default App;
