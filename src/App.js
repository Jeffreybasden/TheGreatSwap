import react from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';

async function connect(){
  const [isConnected, setIsConnected] = useState(false)

  if(window.ethereum){
    await window.ethereum.request({method:'eth_requestAccounts'})
    return 
  }else window.alert('Please add metamask extension!')
}

async function swap(){

}



function App() {
  return (
    <div>
      <div>
        <div>
          <input type='input'/>
        </div>
        <div>
          <p></p>
        </div>
        <button onClick={connect}>Connect</button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
