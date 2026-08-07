import useInput from './../Hooks/useInput'

const HookExam = () => {
    const [input,onChange] = useInput();
    const [input1,onChange1] = useInput();
    console.log(input);
    console.log(input1);

    return (
        <>
            <input value = {input} onChange = {onChange}/>
            <input value = {input1} onChange = {onChange1}/>
        </>
    );
}

export default HookExam;