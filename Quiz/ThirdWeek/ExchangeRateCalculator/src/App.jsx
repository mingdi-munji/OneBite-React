import { useState } from "react";
import Viewer from "./components/Viewer";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  return (
    <>
      <CurrencyInput />
    </>
  );
}
export default App;




//변환 관련 기능은 상위 App에 배치
//currency 에서 입력 
// app에서 받아오기 + useState로 변경 
//변경 값을 Viewer에 표시