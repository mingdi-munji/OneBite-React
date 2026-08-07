//1. 배열의 구조 분해 할당
//: 배열의 요소들을 간결하게 순서대로 할당하는 할당방법
let arr = [1, 2, 3];

//구조 분해 할당을 이용하면, 배열의 각 요소를 개별 변수에 쉽게 할당할 수 있다.
let [one, two, three,four=4] = arr;  //배열의 구조 분해 할당  (값이 없는 경우는 undefined가 할당)
console.log(one, two, three,four);

//2. 객체의 구조분해 할당
let person = {
    name : "양민지",
    age : 23,
    job : "개발자"
};
let {name, age : myAge,job,extra} = person;  //속성의 이름을 변경하고 싶은경우에는, :콜론을 이용하여 이름을 정정
console.log(name, myAge, job, extra); //정정된 이름을 통해 값에 접근할 수 있다.

//3. 객체의 구조분해 할당을 이요하여 함수의 매개변수를 받는 방법
const func = ({name,age,hobby,extra}) =>{
    console.log(name, age, hobby, extra);
}

func(person);