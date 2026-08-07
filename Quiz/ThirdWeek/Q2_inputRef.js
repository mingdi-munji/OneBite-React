import { useRef } from "react";

const App = () => {
    const inputRef = useRef();
    const onClickButton = () => {
        inputRef.current.focus();
    };
    return (
        <div> 
            <input ref = {inputRef} />
            <button onClick= {onClickButton}>Focus</button>
        </div>
    );
};

// Quiz 2. 아래 코드에서 inputRef를 활용해 버튼 클릭 시 input에 포커스를 주려고 합니다. 
// 빈칸에 들어갈 코드를 작성하세요.