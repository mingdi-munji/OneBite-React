const Button =({children,text,color="black"}) => {
    console.log(text+"-"+color);

    const onClickButton =(e) => { //이벤트 객체를 매개변수로 받아옴
        console.log(e);
        console.log(text);
    };

    return (
        <button 
        onClick= {onClickButton}
        // onMouseEnter={onClickButton}
        style={{color:color }}>
            {text}- {color}
            {children}
        </button>
    )
};

export default Button;