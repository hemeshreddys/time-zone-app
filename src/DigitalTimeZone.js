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
            height:200
        }
        return(
            <div style={container}>
                <Clock format={'h:mm:ssa'} ticking={true} timezone={this.props.tZone} />
            </div>
        );
    }
}
export default DigitalTimeZone;