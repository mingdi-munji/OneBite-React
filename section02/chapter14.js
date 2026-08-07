//async
//어떤 함수를 비동기 함수로 만들어주는 키워드 
//함수가 프로미스를 반환하도록 변환해주는 키워드

async function getUser() {
    return {
        id : "00",
        name :"mj",
    }
};
console.log(getUser());

//(원래 비동기인 경우, 별다른 행동을 취하지 x)
async function getData() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve ({
                name : "이정환",
                id : "winterlood",
            });
        },1500);
    });
}

console.log(getData());

//await 
//async 함수 내부에서만 사용이 가능한 키워드 
//비동기함수가 다 처리되기를 기다리는 역할
//-> then메서드 없이 promise의 결과를 간단한 방법으로 사용가능

async function printData() {
    const data = await getData();
    console.log(data);
}
printData();