//1. 배열 순회 
let arr = [1,2,3];

//1.1 배열 인덱스 
for (let i=0;i<arr.length;i++) {
//    console.log(arr[i]);
}

let arr2= [4,5,6,7,8];
for(let i=0;i<arr2.length;i++) {
    // console.log(arr2[i]);
}

//1.2 for of 반복문 (인덱스를 저장하지않고, 내부 요소를 순서대로 출력)
for(let item of arr) {
    console.log(item);
}

//2. 객체순회
let person =  {
    name : "양민지",
    age : 23,
    job : "개발자",
};

//2.1 Object.keys 사용
//-> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (item of keys) {
    const value = person[item];
    console.log(item+" : "+value);
}

//2.2 Object.values 사용 
//-> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
    console.log(value);
}

//2.3 for in
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}

//for of는 배열순회에만 사용가능 / for in은 객체순회에만 사용가능