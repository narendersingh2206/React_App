import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import React, { useState, useEffect } from 'react';

const Thumbmark = () => {
    const [fingerprint, setFingerprint] = useState('');
 
    useEffect(() => {
       getFingerprint()
         .then((result) => {
           setFingerprint(result);
         })
         .catch((error) => {
           console.error('Error getting fingerprint:', error);
         });
     }, []);

  return (
    <div className="container">
        <h1>ThumbmarkJS Device ID is : {fingerprint}</h1>
    </div>
  );
};

export default Thumbmark;
