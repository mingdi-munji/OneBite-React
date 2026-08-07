async function add10(num) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof(num) ==="number") {
                resolve (num+10);
            }else {
                reject (num+"은 숫자가 아닙니다.");
            }
        },5000)
    })
}
async function printAdd10 (num) {
    const result = await add10(num);
    console.log(result);
}
printAdd10(20);