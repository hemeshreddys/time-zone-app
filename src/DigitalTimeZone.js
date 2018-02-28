import React, {Component} from 'react';
import Clock from 'react-live-clock';

class DigitalTimeZone extends Component{
    render(){
        const container = {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:this.props.hAndw,
            height:this.props.hAndw,
            borderRadius:'100px',
            flexDirection:'column',
            margin:'2px',
            backgroundColor:this.props.digiColor
        }
        const itemsCountry ={
            color:'#848484',
            fontSize:'18px',
            fontFamily: 'Anonymous Pro, monospace',
            
        }
        const itemsTime ={
            color:'grey',
            fontSize:'24px',
            fontFamily: 'Quicksand, sans-serif',
        }
        return(
            <div style={container}>
                <div style={itemsCountry}>
                    {this.props.name}
                </div>
                <div style={itemsTime}>
                    <Clock format={'h:mm:ss a'} 
                    ticking={true} timezone={this.props.tZone} />
                </div>
            </div>
        );
    }
}
export default DigitalTimeZone;