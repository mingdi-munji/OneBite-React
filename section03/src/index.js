//CJS에서의 require
// const moduleData = require("./math");
// const {add,sub} = require("./math");

// //ESM에서의 import 
// import {add,sub} from "./math.js";
// //default로 선언된 대표함수는 중괄호 없이 원하는 임시명칭을 사용가능하다.
// import mult from "./math.js";

// //위의 import문을 합쳐서 import mul,{add,sub} from "./math.js"로도 표기 가능

// console.log("안녕 node.js");

// //console.log(moduleData.add(1,2));
// console.log(sub(3,1));
// console.log(mult(3,4));

//------------------------------------------------------------------------
import randomcolor from "randomcolor";
const color = randomcolor();
console.log(color);