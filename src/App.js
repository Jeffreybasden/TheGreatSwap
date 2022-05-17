import react from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';
import {ContentDiv, SwapDiv} from './styled-components'


function App() {
  const [isConnected, setIsConnected] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");


  async function connect() {
    if(window.ethereum){
      
      await provider.send("eth_requestAccounts", []);
      if (provider.getSigner()) {
        setIsConnected(true);
      }else setIsConnected(false)
      return ;
    }else window.alert('Please add metamask extension!')
  }

  async function Swap(){

  }


  return (
    <ContentDiv>
      <SwapDiv>
        <div>
          <input type='input' />
        </div>

        <div>
          <p></p>
        </div>
        {isConnected && <button onClick={Swap}>Swap</button>}
        {!isConnected && <button onClick={connect}>Connect</button>}
      </SwapDiv>
    </ContentDiv>
  );
}

export default App;
