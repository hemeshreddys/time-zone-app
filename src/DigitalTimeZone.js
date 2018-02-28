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
            color:'#C5C3C6',
            fontFamily: 'Anonymous Pro, monospace',
            
        }
        const itemsTime ={
            color:'grey',
            fontSize:'24px',
            fontFamily: 'Julius Sans One, sans-serif',
        }
        return(
            <div style={container}>
                <div style={itemsCountry}>
                    {this.props.name}
                </div>
                <div style={itemsTime}>
                    <Clock format={'h:mm:ssa'} ticking={true} timezone={this.props.tZone} />
                </div>
            </div>
        );
    }
}
export default DigitalTimeZone;