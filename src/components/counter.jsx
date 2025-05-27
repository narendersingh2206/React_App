import React, { Component } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';


//FingerprintJS
const getFingerprint = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  //console.log('Fingerprint:', result.visitorId);
  return result.visitorId;
};



const deviceId=getFingerprint();



class Counter extends Component {
    state = {         
     } 

    render() {       

        return (
            <div className="container">
                <h1>FingerprintJS Device ID is: {deviceId}</h1>                
            </div>
        );
    }
}
 
export default Counter;