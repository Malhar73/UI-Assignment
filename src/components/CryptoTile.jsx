import React from 'react'
import {CaretUpOutlined,CaretDownOutlined} from '@ant-design/icons';

function CryptoTile({coinName,coinSym,change,perChange,buy,sell}) {
    function classAdder(){
        if(coinSym==="BTC"){
            return "CryptoLogo BTC"
        }else if(coinSym==="ETH"){
            return "CryptoLogo ETH"
        }
        else if(coinSym==="MATIC"){
            return "CryptoLogo MATIC"
        }
        else if(coinSym==="DOT"){
            return "CryptoLogo DOT"
        }
        else if(coinSym==="DOGE"){
            return "CryptoLogo DOGE"

        }
        else if(coinSym==="SOL"){
            return "CryptoLogo SOL"
        }
        else{
            return "CryptoLogo"
        }
    }
    return (
        
        <div className="CryptoWrapper">
            <div className='CryptoDetails'>
                <div className={classAdder()} >
                    <img src={"images/"+coinSym+".png"} alt="logo" width="25px"/>
                </div>
            </div>
            <div className='CryptoPrice'>
                <div className='CryptoName'>
                    <p>{coinName}</p>
                    <p>{coinSym}</p>
                </div>
                <div className='CryptoInfo'>
                    <div className={parseFloat(perChange)<0?'CryptoChange loss':'CryptoChange profit'}>
                            <p>{change} ({perChange}%) {parseFloat(perChange)<0?<CaretDownOutlined />:<CaretUpOutlined />}</p>
                            <p>CHANGE</p>
                    </div>
                    <div className='hr-partition'></div>
                    <div className='CryptoBuySell'>
                            <div className='CryptoBuy'>
                                <p>{buy}</p>
                                <p>Buy</p>
                            </div>
                            <div className='vr-partition'></div>
                            <div className='CryptoSell'>
                                <p>{sell}</p>
                                <p>Sell</p>
                            </div>
                    </div>
                </div>
        </div>

    </div> 
    )
}

export default CryptoTile
