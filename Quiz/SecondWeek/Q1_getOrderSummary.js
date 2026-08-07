function getOrderSummary(orders) {
    // let answer=[];
    // let o;
    // for(i=0;i<orders.length;i++) {
    //     if (orders[i].status==="completed") {
    //         o = orders[i];
    //         answer.push(o.menu+" - "+o.quantity+"개 (총 "+o.price*o.quantity+"원)");
    //     }
    //     else
    //         continue;
    // }
    // return answer;

    let answer = orders.filter(
        (item) => item.status==="completed"
    );
    const result = answer.map((item,idx,arr) => {
        return item.menu + " - "+item.quantity+"개 (총 "+item.price*item.quantity+"원";
    });
    // console.log(answer);
    return result;

    //정답 코드
    //   return orders
    // .filter((order) => order.status === "completed")
    // .map(
    //   (order) =>
    //     `${order.menu} - ${order.quantity}개 (총 ${order.price * order.quantity}원)`,
    // );
}

const result = getOrderSummary([
  { menu: "아메리카노", price: 3000, quantity: 2, status: "completed" }, //0
  { menu: "카페라떼", price: 3500, quantity: 1, status: "cancelled" },
  { menu: "크로와상", price: 2800, quantity: 3, status: "completed" }, //2
  { menu: "케이크", price: 5000, quantity: 1, status: "completed" }, //3
  { menu: "녹차라떼", price: 4000, quantity: 2, status: "cancelled" },
]);

console.log(result);
//다음 요구사항을 만족하는 코드를 작성하세요

// 매개변수 orders로 주문 내역 배열을 제공받습니다.
// status가 "completed"인 주문만 필터링합니다.
// 필터링된 주문을 "{메뉴명} - {수량}개 (총 {price * quantity}원)" 형태의 문자열 배열로 변환합니다.
// 변환된 배열을 반환합니다.
// Hint: filter와 map을 활용하세요!

// 출력 결과 :
// ["아메리카노 - 2개 (총 6000원)", "크로와상 - 3개 (총 8400원)", "케이크 - 1개 (총 5000원)"]