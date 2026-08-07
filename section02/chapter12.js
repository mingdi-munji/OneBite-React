// function add(a,b,callback) {
//     setTimeout(() => {
//         const sum = a+b;
//         callback(sum); //인수로 콜백함수에 전달
//     },3000);
// }

// add(1,2,(value) => { //콜백함수의 값을 받아서 함수 실행
//     console.log(value); //실행값을 로그에 출력
// });

//------------------------------------------------------
//음식을 주문하는 상황
function orderFood(callback) {  //인수와 콜백을 작성
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    },3000);
}

//-----------------------------------------------------
//음식을 식히는 상황
function coolDownFood(food,callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    },2000); 
}
//----------------------------------------------------
//음식을 얼리는 상황
function freezeFood(food,callback) {
    setTimeout(()=> {
        const freezedFood = `얼어버린 ${food}`;
        callback(freezedFood);
    },4000)
}
//실행함수
orderFood((food)=> {
    console.log(food);
    coolDownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
    });
    freezeFood (food,(freezedFood)=> {
        console.log(freezedFood);
    })
});

//콜백이 많아져서 들여쓰기가 깊어지는 것을 콜백지옥이라고 js개발자들은 칭한다.