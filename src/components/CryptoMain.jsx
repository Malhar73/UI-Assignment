import React,{useEffect,useState} from 'react';
import '../styles/CryptoMain.css'
import logo from '../assets/BTC.png';
import CryptoTile from './CryptoTile';


function CryptoMain({Selectedcrypto,setSelectedcrypto}) {
    // List of MyCryptos
     let tiles=[
        <CryptoTile key="BTC" coinName="Bitcoin" coinSym="BTC" change="2280.67" perChange="5" buy="2000" sell="3000"/>
        ,<CryptoTile key="ETH" coinName="Ethereum" coinSym="ETH" change="210.27" perChange="-2.45" buy="120.40" sell="150.03"/>
        ,<CryptoTile key="SOL" coinName="Solana" coinSym="SOL" change="3000" perChange="1.35" buy="1000" sell="900.65"/>
        ,<CryptoTile key="MATIC" coinName="Polygon" coinSym="MATIC" change="1480.67" perChange="-3.25" buy="690" sell="741"/>
        ,<CryptoTile key="DDOT" coinName="Polkadot" coinSym="DOT" change="4000" perChange="9.65" buy="3000" sell="6000"/>
        ,<CryptoTile key="DOGE" coinName="Dogecoin" coinSym="DOGE" change="470.17" perChange="4.98" buy="200" sell="500"/>
    ]
    // Used to filter tiles based on selection
    const [CryptoTiles, setCryptoTiles] = useState([...tiles])
    // Each time cryptoselected filter myCrypto tiles    
    useEffect(() => {
        if(Selectedcrypto)
            setCryptoTiles(tiles.filter((tile)=>tile.props.coinSym===Selectedcrypto))
        else
            setCryptoTiles(tiles)
    }, [Selectedcrypto]) 


    return (
        <div className="CryptoMain" onClick={()=>setSelectedcrypto(undefined)}>
            <div className="CryptoHeader">
                <img src={logo} alt="logo" width="25px"/>&nbsp;&nbsp; 
                <p>My Crypto</p>
            </div>
            <div className="container">
                {/* Display Crypto Tiles */}
            {CryptoTiles.map((tile)=>tile)}
           </div>
        </div>
    )
}

export default CryptoMain
