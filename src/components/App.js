import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const CONTAINER_SIZE = 4;
const BUDGET = 100;

function App() {
  const [sushi, setSushi] = useState([]); //data is an arr of objs so init val is []
  const [sushiStart, setSushiStart] = useState(0);
  const [wallet, setWallet] = useState(BUDGET); //We have $100 in our wallet to spend on sushi

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      setSushi(data);
    });//set data as sushi state
  },[]); //< empty dependencies array says only to run this useEffect the first time that app renders

  function showMore() {
    console.log('showMore was invoked')
    setSushiStart(sushiStart + CONTAINER_SIZE);
  }

  function eatSushi(sushiObj) {
    console.log('eatSushi was invoked')
    if(sushiObj.eaten) {
      return;//we don't want to get charged again for sushi we already ate & paid for
    }
    
    if(wallet <= 0 || wallet-sushiObj.price < 0) {
      alert("You can't afford that");
    } else {
      setWallet(wallet-sushiObj.price);
      setSushi(sushi.map( s => 
        //below we are creating a 'eaten' key = to true, for eaten sushis.
        //undefined is falsy so that takes care of ternary operator in Sushi component
        s.id === sushiObj.id ? {...sushiObj, eaten: true} : s
      ));
    }
  }

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi.slice(sushiStart, sushiStart+ CONTAINER_SIZE)} 
        showMore={showMore}
        eatSushi={eatSushi}
      />
      <Table wallet={wallet} plates={sushi.filter(s => s.eaten)}/> 
      {/* wallet is only being displayed in Table component */}
    </div>
  );
}

export default App;
