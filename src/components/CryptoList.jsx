import React from 'react'
import {LeftOutlined} from '@ant-design/icons';
import '../styles/CryptoList.css'
import ListElement from './ListElement'
function CryptoList({cryptos,Selectedcrypto,setSelectedcrypto,query,setQuery}) {

    // SearchBar Functionality
    const filteredcryptos=searchHandler(cryptos,query)
    function searchHandler(cryptos,query){
        if (!query) {
            return cryptos;
        }
        // If searchbar text is empty show all cryptos
        return cryptos.filter((crypto) => {
            const cryptoName = crypto.name.toLowerCase();
            return cryptoName.includes(query.toLowerCase());
        });
        
    }

 

    return (
        <div className="CryptoList">
            <p onClick={()=>window.location.reload()}><LeftOutlined className="LeftOutlined" style={{color:'#959DA5'}} />&nbsp; &nbsp; Cryptos ({filteredcryptos.length})</p>
            <br/>
            <input type="text" placeholder="&#x1F50D;&#xFE0E;&nbsp; Search" onChange={event => setQuery(event.target.value)}></input>
            {/* Display List items */}
            {filteredcryptos.map((crypto)=><ListElement key={crypto.id} Selectedcrypto={Selectedcrypto} setSelectedcrypto={setSelectedcrypto} coinName={crypto.name} coinSym={crypto.id} />)}
            
        </div>
    )
}

export default CryptoList


