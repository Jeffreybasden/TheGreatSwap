
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers';

function connect(){
  if(window.ethereum){
    window.ethereum.request({method:'eth_sendTransaction'})
  }else window.alert('Please add metamask extension!')
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  document.getElementById('root')
);
reportWebVitals();


 
  


