//1. 함수표현식
function funcA() {  //함수선언문
    //console.log("funcA");
}

let varA = funcA;  //함수를 변수에 담게되면 변수 이름으로 호출가능
varA();

//-----------------------------------------------------------
//아래의 함수들은 변수에 담기면서 생성되었기 때문에 독립적인 함수로 사용 불가
//-> 함수선언이 아닌, 변수에 담겨진 값으로 인식된다.
//-> 그렇기에 호이스팅 (11참고)의 대상이 되지않는다.
let varB = function funcB() {  //함수를 변수에 담을 수 있다.
    //console.log("funcB");
}
let varC = function () {  //익명함수 (이름이 없는 함수)
    //console.log("funcC");
}
varB();

//2. 화살표 함수
let varD = () => {  //function을 지우고 ()와 {} 사이에 화살표'=>' 삽입
    return 1;
}
let varE = (value) => value+1;  //중괄호와 리턴문을 지워 표현가능 (복잡한 식은 중괄호로 표현)
console.log(varD());
console.log(varE(2));