//1. 단락평가 : 논리연산에서 첫번째 값으로 결과가 정해지는 경우, 두번째 값에 접근하지 않는것 
//-> 첫번째 값으로만 결과가 정해지지않는 경우에는 두번쨰 연산에도 접근한다.

// function returnFalse() {
//     console.log("false함수");
//     return undefined;
// }
// function returnTrue() {
//     console.log("true함수");
//     return 10;
// }

// console.log(returnFalse() && returnTrue());  //이는 truesy한 값과 falsy한 값에 대해서도 적용된다.


///2. 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;  //둘의 값이 모두 T인 경우, 뒤의 값인 person.name이 name에 할당된다.
    console.log(name||"person의 값이 없음"); //만약 name이 F라면, T인 뒤의 문자열 값이 출력된다.
}
printName();
printName({name : "양민지"});

//앞에서 결과 확정 => 뒤의 값에 접근 없이 앞의 값 할당
//앞에서 결과 확정x => 뒤의 값에 접근하여 뒤의 값을 할당