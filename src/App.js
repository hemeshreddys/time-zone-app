import React, { Component } from 'react';
import './App.css';
import DigitalTimeZone from './DigitalTimeZone';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:
      [
        { id:1, zone:"US/Pacific", cname:"America" },
        { id:2, zone:"Asia/Kolkata", cname:"India" },
        { id:3, zone:"Australia/Melbourne", cname:"Melbourne" },
        { id:4, zone:"Asia/Tokyo", cname:"Japan" },
        { id:5, zone:"Asia/Singapore", cname:"Singapore" },
      ]
    }
  }
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
          { this.state.data.map((dynamicData,i) =>
            <DigitalTimeZone tZone={dynamicData.zone} name={dynamicData.cname} hAndw="150px" digiColor="white"/>
          )}
      </div>
    );
  }
}
export default App;
