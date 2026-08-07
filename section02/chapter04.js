//1. Spread 연산자 
//-> 흩뿌리다, 펼치다
//-> 객체나 배열에 저장된 여러새의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1,5, 6];  //여기서의 ...이 spread연산자, 각각의 값을 꺼내는 역할
// console.log(arr2);

let obj1 = {
    a:1,
    b:2,
};

let obj2 = {
    ...obj1,
    c:3,
    d:4,
};

function funcA (p1,p2,p3) {
    console.log(p1, p2, p3);
}

funcA (...arr1);

//2. Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수
function funcB (one,...arr1) { //이런 식으로 함수의 매개변수에서 ...을 사용하면 앞에 있는 내용을 제외한 나머지값(rest)을 반환한다.
//-> rest매개변수의 뒤에는 변수를 넣을 수 없다. (뒤에 남은 나머지값을 반환하는 것이기 때문.)
    console.log(arr1);
}
funcB(...arr1);