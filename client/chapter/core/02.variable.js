/**
 * ! 변수는 변할 수 있는 수
 * ? 상수는 변할 수 없는 수
 * ? 상수는 할당 된 값을 바꾸지 못한다. 하지만 할당된 객체, 배열에는 접근하여 변경할 수 있다.
 * % 변수명은 변수가 담고 있는 것이 무엇인지 쉽게 알 수 있도록 지어져야 합니다. 의미 없는 짧은 이름은 피하자 ex) a, b, c
 */

// ! 변수
let message = 'hello'; // hello
message = 'hi'; // hi
// let message = "hi"; // ! let은 재선언 불가능 재할당 가능

console.log(message); // hi

// ? 상수
// ? 상수는 할당 된 값을 바꾸지 못한다. 하지만 할당된 객체, 배열에는 접근하여 변경할 수 있다.
// ? 상수 const는 선언과 할당이 동시에 이루어져야 한다.

const test = 1;
// test = 2;  // ! const는 재선언, 재할당 불가능하다.
console.log(test);

const array = [1, 2, 3];
array[0] = 3;
console.log(array); // [3, 2, 3]

const object = { name: '우빈' };
object.name = '이우빈';
console.log(object); // 이우빈

console.log('-----------------------------');

console.log('variable');

let admin;
let name;

name = 'john';
admin = name;

console.log(admin);

let OUR_PLANT_NAME = 'earth';
let currentUserName = '우빈';

console.log(OUR_PLANT_NAME, currentUserName);

/* ------------------ */
/* Variables          */
/* ------------------ */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */

// - 갯수 별 상품 가격 계산하기
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 구매 결제 여부
// ? is, has가 변수명으로 들어올 때는 암묵적으로 개발자들끼리 불리언값이 할당된다.
let isPayment = true;
let hasPayment = false;

// - 구매 결제 내역
let isPaymentList = true;

// - 오늘의 운세
let todayFortune = 'good';

/* constant variables -------------------------------------------------- */

// - 1년 기준 일(day)자 수
const DAY_OF_YEAR = 365;

// - 브랜드 접두사
const BRAND_PREFIX = 'nike';

// - 상품 정보
const productInfo = '비싸';
