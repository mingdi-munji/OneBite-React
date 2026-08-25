import {useState} from 'react';

const CurrencyInput = () => {
    const [won,setWon] = useState(0);
    const [dollar,setDollar] = useState(0);

    const changedWon = (e) => {
        setDollar(e.target.value/1300);
        setWon(e.target.value);
    }
    
    const changedDollar = (e) => {
        setDollar(e.target.value);
        setWon(e.target.value*1300);
    }

    return (
        <>
        <h1> 환율 변환기 (KRW-USD)</h1>
            <div>
            krw:<input value={won} onChange={changedWon}/>
            </div>
            <div>
                usd:<input value = {dollar} onChange={changedDollar}/>
                    {/* <input value={changedDollar}/> */}
            </div>
        </>
    )
}
export default CurrencyInput;