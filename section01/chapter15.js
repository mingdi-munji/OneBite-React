//1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

//2. 객체 프로퍼티 (객체 속성)
//-> 프로퍼티(속성)의 개수 제한은 없다.
let person = {
    name : "양민지",  //key:value 구조
    age : 22,
    hobby : "뜨개질",
    10 : 20,  //키 값으로는 문자열과 숫자 사용가능
    "like cat" : true,  //띄어쓰기가 있는 경우에는 ""필요
};

//3. 객체 프로처티를 다루는 방법
//3.1 특정 프로퍼티에 접근 (점표기법(간단), 괄호표기법(동적))
//-> 존재하지않는 프로퍼티접근은 undefined 반환
let name = person.name;
let age = person ["age"]; //대괄호,"",키값을 사용하여 접근

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//3.2 새로운 프로퍼티를 추가하는 방법
person.job="home protector";
person["favoriteFood"] = "Donut";

//3.3 프로퍼티를 수정하는 방법
person.job = "developer";
person["age"]=23;

//3.4 프로퍼티를 삭제하는 방법
delete person.age;
delete person["favoriteFood"];

//3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1= "name" in person;
let result2 = "cat" in person
console.log(result1,result2);  //true false
console.log(person);
