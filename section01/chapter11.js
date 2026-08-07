let area1 = getArea(10,20);
console.log(area1); //전달되는 값: 인수

//호이스팅 
//-> 끌어올리다 라는 뜻
//선언문을 호출문보다 뒤에 있어도 정상적으로 작동

//함수선언
function getArea(width,height) {  //전달받은 값 : 매개변수
    let area = width*height;
        function another() {  //중첩함수
            console.log("another");
        }
    return area;
}