//완전히 새로운 값을 할당하지못하는 것. 원래의 값을 변경하는 것은 가능
//1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

animal.age = 2; //추가
animal.name ="까망이"; //수정
delete animal.color; //삭제

//2. 메서드
//-> 값이 함수인 프로퍼티를 말함
const person = {
    name : "양민지",
    //메서드
    sayHi : function() {
        console.log("안녕!");
    },
    //메서드 선언
    sayBye () {
        console.log("잘가!");
    },
};
person.sayHi();
person["sayBye"]();