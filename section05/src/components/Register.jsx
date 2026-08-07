import { useState,useRef } from "react";

//간단한 회원가입 폼 
//이름, 생년월일, 국적, 자기소개
const Register = () => {
    const [input,setInput] = useState({
        name :"",
        country:"",
        birth:"",
        intro:"",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        console.log(e.target.name , e.target.value);
        setInput({
            ...input,
            [e.target.name] : e.target.value, //e.target의 name인 name,birth,country,intro를 키 값으로 value값이 저장된다.
        });
    }

    const onSubmit = () => {
        if(input.name ==="") {
            //이름을 입력하는 DOM요소 포커스
            inputRef.current.focus();
            alert ("이름을 입력하세요");
        }
    };

    return (
        <div>
            <div>
                <input 
                    ref = {inputRef}
                    name="name"
                    value = {input.name} //초깃값 
                    onChange={onChange}
                    placeholder="이름" //예시제공
                />
                {input.name}

            </div>
            <div>
                <input 
                    name="birth" 
                    value ={input.birth} 
                    onChange = {onChange} 
                    type="date"/>
                {input.birth}
            </div>
            <div>
                <select 
                    name="country" 
                    value={input.country} 
                    onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option> 
                    <option value="us">미국</option>
                    <option value="ch">중국</option>
                    <option value="jp">일본</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea 
                    name="intro"
                    value = {input.intro} 
                    onChange= {onChange} 
                    placeholder="자기소개를 입력하세요"/>
                {input.intro}

            </div>
            <div>
                <button onClick={onSubmit}> 제출 </button>
            </div>
        </div>
       
    )
}
export default Register;