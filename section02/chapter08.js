//5가지의 요소 순회 및 탐색 메서드 

//1, forEach(function(요소,인덱스,배열명))
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function(item,idx,arr) { //item은 요소, idx는 인덱스,arr은 배열이름
    console.log(`${idx}번째 요소 *2는 ${item*2}`);
})

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item*2);
})
console.log(doubledArr);

//2. includes 
//배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(1); //true

//3. indexOf 
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2,2,2]; 
let index2 = arr3.indexOf(2); //여러개인 경우, 가장 처음의 인덱스를 반환
let index30 = arr3.indexOf(30); //없는 경우, false를 의미하는 -1반환

//4. findIndex 
//모든 요소를 순회하면서, 콜백함수를 만족하는 인덱스를 반환
//indexOf에 함수 만족요소를 넣은 느낌 (함수를 지정하여 만족하는 첫번쨰 요소 반환)
let arr4 = [1,2,3,4,5];
let indexFunction = arr4.findIndex((item) => {
    if (item ===4) return true;
})
console.log("findIndex의 원시결과값 : "+indexFunction);

let ObjectArr = [
    {name : "이정환"},
    {name : "양민지"},
];
let objectIndex = ObjectArr.findIndex((Object)=> {
    if(Object.name==="양민지") return true;
})
console.log(objectIndex?`양민지의 인덱스 : ${objectIndex}`:"양민지라는 이름의 객체는 없습니다.");


//indexOf는 주로 원시값을 확인할 때, findIndex는 객체값을 확인할 때 사용한다.
//indexOf는 얕은 비교, findIndex는 깊은 비교

//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환 (인덱스를 반환하는 것이 x)
let arr5 = [
    {name :"이정환"},
    {name : "양민지"},
];
const finded = arr5.find(
    (item) => {if(item.name==="이정환") return true}
);
console.log(finded);  //name :"이정환" 
                      //찾아낸 첫번째 객체 자체를 반환