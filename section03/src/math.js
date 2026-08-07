//math 모듈
export function add(a,b) {
    return a+b;
}
function sub(a,b) {
    return a-b;
}

//CJS에서의 export
// module.exports = {
//     add : add,
//     sub, //내보내는 이름이 같은 경우에는 생략가능
// }

//ESM에서의 export (또는 함수를 선언할 때 function 앞에 export를 써도 됨)
export {sub};

//ESM에서 export default는 모듈의 대표함수이다.
export default function multiply(a,b) {
    return a*b;
}