import react from 'react'

import { ethers } from 'ethers';

function connect(){
  if(window.ethereum){
    window.ethereum.request({method:'eth_sendTransaction'})
  }else window.alert('Please add metamask extension!')
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
      </div>
    </div>
  );
}

export default App;
