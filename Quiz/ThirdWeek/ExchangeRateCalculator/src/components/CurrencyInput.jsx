import { useState } from "react";
const CurrencyInput = () => {
    const [won,setWon] = useState(0); //won에 대한 useState 설정
    const [dollar,setDollar] = useState(0); //dollar에 대한 useState 설정

    const changeToDollar = (won) => {
        return won/1.3;
    }
    const changeToWon = (dollar) => {
        return dollar*1.3;
    }

    return (
        <>
            <div>
                krw:<input value={won} onChange = {(e) => {setWon(e.target.value)}}></input>
                {won}
            </div>
            <div>
               usd: <input value={dollar} onChange = {(e) => {setDollar(e.target.value)}}></input>
            </div>
        </>
      );
};

//input의 값을 넘겨줘야됨.
//App에서 변형 -> Viewer로 넘겨줘야될듯
export default CurrencyInput;