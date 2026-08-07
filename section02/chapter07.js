//6개의 요소 조작 메서드 

//1. push 
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드 (변화한 길이를 반환)
let arr1 = [1,2,3];
const newLength =arr1.push(4,5,6,7,9);

console.log(arr1);
console.log(newLength);

//2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 제거된 요소를 반환
const poppedItem = arr1.pop();
console.log(poppedItem);
console.log(arr1);

//3. shift
//배열의 맨 앞에 있는 요소를 제거, 제거된 요소를 반환
const shiftedItem = arr1.shift();
console.log(shiftedItem);
console.log(arr1);

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr2 = [1,2,3];
arr2.unshift(0);
console.log(arr2);

//shift와 unshift는 인덱스들이 하나씩 밀려야하기 때문에 push,pop보다 오래걸린다.

//5. slice
//마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환 
let arr3 =[1,2,3,4,5];
let sliced1 = arr3.slice(0,2); //0-1의 요소 반환 (원본의 배열은 변경되지않는다.)
let sliced2 = arr3.slice(-3); //0-1의 요소 반환 (원본의 배열은 변경되지않는다.)
console.log (sliced1);
console.log (sliced2);

//6. concat
//두 개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);