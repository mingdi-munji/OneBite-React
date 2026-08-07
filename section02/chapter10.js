//1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자 
// console.log(date1);

let date2 = new Date("2004-03-04/09:00:00")//-,., ,/ 중 하나로 표기하면 된다.
// let date3 = new Date(2004,3,4,9)//같은 결과를 갖는다 (,로만 표현가능)
// console.log(date2);

//2. 타임스탬프_getTime()
//특정시간이 "1970,01,01 00시 00분 00초"(utc)로 부터 멸 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);
let date4=new Date(ts1); //지난 시간으로 시각설정도 가능하다

//3. 시간요소들을 추출하는 방법
//js는 month를 0부터 측정한다.
let date5 = new Date();
let year = date5.getFullYear();
let month = date5.getMonth()+1;
let date = date5.getDate();

let hour = date5.getHours();
let minuate = date5.getMinutes();
let second = date5.getSeconds();

// console.log(year, month,date,hour, minuate, second);

//4. 시간 수정하기_set
date1.setFullYear(2023);
date1.setMonth(2)+1;
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

//5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); //현지의 시각형태로 반환(2023. 3. 30. 오후 11:59:59)
