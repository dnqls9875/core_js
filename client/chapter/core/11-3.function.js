/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// 화살표 함수는 arguments가 존재하지 않는다.
// 중요 rest parameter

let calcAllMoney = (...rest) => {
  let total = 0;
  // for문 total
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }

  //for of문 total
  for (const value of rest) {
    total += value;
  }

  // forEach
  rest.forEach((value) => (total += value));

  // reduce

  // return total;

  return rest.reduce((acc, cur) => {
    return acc + cur;
  });

  // return rest.reduce((acc, cur) => acc + cur);
};

const result = calcAllMoney(10000, 30000, 50000);
console.log(result);

// 화살표 함수와 this

/**
 * Arrow function은 this를 바인딩 하지 않습니다.
 */

// console.log(this); // window globalThis

// ? (일반 함수)나를 호출한 대상에 따라 this가 달라진다.
// function a() {
//   console.log(this);
// }

// a();

// ? (화살표 함수)실행 환경에 따라 this가 달라진다.
// const b = () => {
//   console.log(this);
// };

// b();

/**
 * ! 자바스크립트의 함수는 양면의 얼굴
 * ? 일반 함수 (normal function)
 * ? 화살표 함수 (constructor function)
 */

function Button(text, color) {
  this.content = text;
  this.style = color;
}

// const _a = button();
const __a = new Button('more', 'red');

/**
 * ! 일반 함수
 * - constructor 내장(concise method 예외)
 * - this : 나를 호출한 대상 this
 * - 객체의 메서드로 많이 사용됨 => this를 찾기 위해
 */

/**
 * ! 화살표 함수
 * - constructor 비내장 (성능 최적화)
 * - this : 바인딩 하지 않음 => 상위 컨테스트에서 찾음
 * - 메서드 안의 함수를 작성해야 하는 경우 => 내 상위 this를 찾기 위해
 */

const user = {
  name: '박혜미',
  total: 0,
  grades: [50, 70, 40],
  totalGrades() {
    // 화살표 함수 축약형
    // this.grades.forEach((g) => (this.total += g));

    // 화살표 함수 축약형 + reduce 값을 바로 내보내는
    this.total = this.grades.reduce((acc, cur) => acc + cur);
    return this.total;
  },
};

user.totalGrades();

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

// let pow = function (numeric, powerCount) {
//   let total = 1;

//   for (let i = 0; i < powerCount; i++) {
//     total = total * numeric;
//   }
//   return total;
// };

// let pow = (numeric,powerCount) => {
//   return Array(powerCount).fill(null).reduce((acc,cur)=>{
//     return acc * cur
//   })
// }

let pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

// let pow = (...rest) => {
//   // return rest.reduce((acc, cur) => acc ** cur);
//   let total = 1;

//   rest.forEach((value) => {
//     total **= value;
//   });

//   return total;
// };

const powResult = pow(2, 53);
console.log(powResult);

// repeat(text: string, repeatCount: number): string;
// let repeat = (text,repeatCount) => {
//   let result = '';

//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }

//   return result
// };

// let repeat = (text, repeatCount) => {
//   return Array(repeatCount)
//     .fill(null)
//     .reduce((acc) => {
//       return acc + text;
//     }, '');
// };

let repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

// let repeat = (...rest) => {
//   return rest.reduce((acc, cur) => acc + cur, '');
// };

repeat('배고파🍛', 3); // 배고파🍛배고파🍛배고파🍛

function arrayFunction() {}

const af = arrayFunction(1, 2, 3);
