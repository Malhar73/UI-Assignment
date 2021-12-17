import React from 'react'

function ListElement({coinName,coinSym,Selectedcrypto,setSelectedcrypto}) {
    return (
        <div>
            <div onClick={()=>{setSelectedcrypto(coinSym)}} className={Selectedcrypto===coinSym?"Crypto Selected":"Crypto"}>
                <div  className="CryptoIcon">
                </div>
                <div  className="CryptoText">
                    <p>{coinSym}</p>
                    <p>{coinName}</p>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default ListElement
