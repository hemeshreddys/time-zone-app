import React, {Component} from 'react';
import Clock from 'react-live-clock';

class DigitalTimeZone extends Component{
    render(){
        const container = {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            border:'1px solid grey',
            width:200,
            height:200,
            borderRadius:'100px',
            flexDirection:'column',
            margin:'2px',
            backgroundColor:'#204E4A'
        }
        const itemsCountry ={
            color:'#C5C3C6',
            fontFamily: 'Anonymous Pro, monospace',
            
        }
        const itemsTime ={
            color:'#DCDCDD',
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