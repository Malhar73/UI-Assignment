import React,{useEffect,useState} from 'react'
import './App.css';
import {CryptoMain,CryptoList} from './components/global'
import axios from 'axios';
function App() {

  const [cryptos, setcryptos] = useState([]) // list of total 144 cryptos fetched from the API
  const [Selectedcrypto, setSelectedcrypto] = useState() // State that stores the currently selected crypto
  const [query, setQuery] = useState("") // Search query

  useEffect(() => {
    axios.get('https://api.exchange.coinbase.com/currencies')
      .then(response => {
        setcryptos(response.data)
      })
      .catch(error => {
        console.log(error.response.status);
      })
    }, []); // Make the API call on mount 

  return (
    <div className="App">
      {/* List of cryptos (Left Panel) */}
      <CryptoList className="CryptoList" cryptos={cryptos} setcryptos={setcryptos} query={query} setQuery={setQuery} Selectedcrypto={Selectedcrypto} setSelectedcrypto={setSelectedcrypto} />
      {/* List of cryptos Tiles (Right Panel) */}
      <CryptoMain className="CryptoMain" Selectedcrypto={Selectedcrypto} setSelectedcrypto={setSelectedcrypto}/>
    </div>
  );
}

export default App;
