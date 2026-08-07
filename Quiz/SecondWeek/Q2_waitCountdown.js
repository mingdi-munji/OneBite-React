function wait(ms) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve();
    },ms); //ms초가 지나는 것을 위주로 함(대기를 목적으로 사용)
  });
}

async function countdown(seconds) {
  try {
    for(let i=seconds;i>0;i--) {  //5번만큼 이를 반복
    console.log(i); //초를 카운트 다운(출력)
    await wait(1000); //1초의 간격을 만듬
    }
    console.log("🎉 타이머 종료!");  //for 문을 나온 후 console 출력
  } catch (error){  
    console.log("에러발생: ",error);
  }
}

countdown(5);

// 출력 결과 : (1초 간격으로 출력)
// 5
// 4
// 3
// 2
// 1
// 🎉 타이머 종료!
// 다음 요구사항을 만족하는 코드를 작성하세요

// 함수 wait는 매개변수 ms만큼 대기했다가 resolve를 호출하는 Promise를 반환합니다.
//=> 5초 후 문구 출력

// 함수 countdown은 매개변수 seconds를 받아 1초 간격으로 카운트다운을 출력합니다.
// await와 wait 함수를 활용하세요!
// 카운트다운이 끝나면 "🎉 타이머 종료!" 를 출력합니다.
// 예외가 발생할 경우를 대비해 에러 핸들링 코드를 추가하세요.
