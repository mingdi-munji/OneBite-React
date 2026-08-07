import { useEffect } from "react";

const Even = () => { 
    useEffect(()=> { //전체적인 구조: 빈배열 useEffect 로 마운트 될 때 실행 , unMount 될때 종료되는 함수
        return () => {
            console.log("unMount");
        };
    } ,[]); 
    return <div>짝수입니다.</div>
}

export default Even;