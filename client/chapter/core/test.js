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

// font 함수
function rem() {}

console.log(rem(20) === '1.25rem');
console.log(rem('25px') === '1.5625rem');
console.log(rem('30px', 10) === '3rem');

// setCss 함수
function setCss() {}

const result = console.log(setCss('.first', 'color', 'skyblue'));
console.log(result);

// getCss 함수
function getCss() {}

const getResult = console.log(getCss('.first', 'color'));
console.log(getResult);

// css 함수 관심사의 분리

function css() {}

console.log(css('.first', 'color'));

console.log(css('.first', 'color', 'red'));
