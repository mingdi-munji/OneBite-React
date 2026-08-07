//Promise : 비동기작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장객체
//Promise의 3가지 상태 : 대기(Pending)/ 성공(Fullfilled)/ 실패(Rejected)

function add10(num){
    const promise = new Promise((resolve,reject) => {
        //executor : 비동기 작업을 실행하는 함수
        setTimeout( () => {
            if (typeof(num) === "number") { //resolve()로 하면 promiseState가 Fullfilled로
                resolve(num+10); //내부에 들어가는 요소가 PromiseResult
            } else {//reject()로 하면 promiseState가 rejected로 
                reject("num은 숫자가 아닙니다.")//실패시 내부 요소 출력
            }
        },2000);
    });

    return promise;
}

//then 메서드 (promise가 성공인 경우에 작동)
//-> 그 후에
// {    
//     promise.then ((value) => {
//         console.log(value);
//     });

//     //catch 메서드 (promise가 실패인 경우에 작동)
//     promise.catch((value) => {
//         console.log(value);
//     });
// }

//promise chainning 기법
//then메서드와 catch메서드의 promise객체는 동일하기 때문에 아래와 같이 작성도 가능하다.
// promise.then((value)=> {
//         console.log(value);
//     }).catch((error)=> {
//         console.log(error);
//     });

//------------------------------
add10(null).then((result)=> {
    console.log(result);
    return add10(result);
}).then((result)=> {
    console.log(result);
    return add10(result);
}).then((result) => { //같은 방식으로 중첩된 작업을 수행가능
    console.log(result);
}).catch((error) => { //실행 중 오류가 발생하는 윛치상관없이 catch문 실행
    console.log(error);
});