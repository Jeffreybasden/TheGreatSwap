import react from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';


function App() {
  const [isConnected, setIsConnected] = useState(false);

  async function connect() {
    if(window.ethereum){
      await window.ethereum.request({method:'eth_requestAccounts'})
      return ;
    }else window.alert('Please add metamask extension!')
  }

  async function swap(){

  }


  return (
    <div>
      <div>
        <div>
          <input type='input' />
        </div>
        <div>
          <p></p>
        </div>
        {isConnected && <button>Connected!</button>}
        {!isConnected && <button onClick={connect}></button>}
      </div>
    </div>
  );
}

export default App;
