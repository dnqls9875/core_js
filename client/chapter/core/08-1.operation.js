/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = -a;
console.log(unary); // -10

// 이항 연산자
let binary = +a + +b; // Number(a) + Number(b) 명시적으로 할 수도 있음
console.log(binary); // 40

// ? (✨✨✨ 중요) // 삼항 연산자
let ternary = a > 10 ? '사실입니다' : '거짓입니다';
console.log(ternary); // false

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;

// 산술 연산자: 곱셈
let multiplication = 20 * 3;

// 산술 연산자: 나눗셈
let division = 30 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;
console.log(remainder);

// 산술 연산자: 거듭 제곱
let power = 2 ** 3;
console.log(power);
let power2 = Math.pow(2, 53);
console.log(power2);

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
// 배열끼리는 더할 수 없다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];

let first = [1, 2, 3];
let second = [4, 5, 6];

// concat 배열을 이어 붙힐 수 있는 method [요즘 잘 안씀]
// const mix = first.concat(second);
// console.log(mix);

// ? (✨✨✨ 중요) //
// ? spread operator 전개 연산자
// ? spread syntax 전개 구문
console.log([...first, ...second]); // ...은(배열이 벗겨짐) // [1,2,3,4,5,6]

// const obj = {
//   name: '우빈',
//   age: 30,
// };

// console.log(...obj);
// 검색해보기 아래 에러
// Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

console.clear();

let counter = 0;
console.log(counter++); // 0
console.log(++counter); // 2
console.log(counter); // 2

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?

console.log(total);
