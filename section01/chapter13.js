//1. 콜백함수 
//-> 자신이 아닌 다른 함수에 인수로서 전달된 함수 (함수에서 다른 함수 호출)
function main(value) {
//    console.log(value);  //원하는 타이밍에 함수를 실행할 수 있다.
}
function sub(){
//    console.log("i am sub");
}
main(sub);

//다른 표현 
main(()=>{
//    console.log("i am sub");
});

//2. 콜백함수의 활용
function repeat(count,callback) {
    for (let idx =1;idx<=count;idx++){
        callback(idx);
    }
}
repeat(5,(idx)=>{
    console.log(idx);
});
repeat(5,(idx)=> {
    console.log(idx*2);
})
repeat(5,(idx)=> {
    console.log(idx*3);
})

//콜백함수의 구조
// function A(callback){
//     callback();
// }

// A(function(){
//     실행코드
// });