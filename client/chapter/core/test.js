// 1. 사용자 (user)의 상태
// - 회원 / 비회원
// 회원 => 일반 / 프리미엄

// 2. 할인 규칙
// - 모든 사용자(회원, 비회원) 첫 구매시 5% 할인
// - 일반회원은 두 번째 구매부터 10% 할인을 받는다.
// - 프리미엄 회원은 항상 20% 할인을 받는다.
// - 비회원은 두 번째 구매부터 할인을 받을 수 없다.

// 3. 추가조건
// - 구매 금액이 2만원일 경우, 추가로 5% 할인이 부여된다.

// function discountPrice(userState, count, price) {}

// discountPrice('프리미엄 회원', 2, 23500);

function discountPrice(userState, count, price) {
  let discount = 0;
  if (count === 1) {
    discount += 5;
  }

  if (userState === '프리미엄 회원') {
    discount += 20;
  } else if (userState === '일반 회원' && count > 1) {
    discount += 10;
  } else if (userState === '비회원' && count > 1) {
    discount += 0;
  }

  if (price >= 20000) {
    discount += 5;
  }

  const totalPrice = price - price * (discount * 0.01);
  // const totalPrice = price * (1 - discount / 100);
  return totalPrice;
}

console.log(discountPrice('프리미엄 회원', 2, 23500));
