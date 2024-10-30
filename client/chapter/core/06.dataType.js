/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); // 언어 상 오류 null = object

// 2. 값이 할당되지 않은 상태
let unallocated;
console.log(typeof unallocated);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let double = '큰';
let single = '작은';
let backtic = `인도의 ${double * 30}이 맛있다.`;

console.log(typeof double, typeof single, typeof backtic);
console.log(backtic);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let integer = 150;
let decimalPoint = 3.14;

console.log(typeof integer, typeof decimalPoint);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigInt = 1231546546542134n;
console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
let isActive = true;
let isFalse = false;

console.log(typeof isActive);
console.log(typeof isFalse);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
  name: '우빈',
  age: 30,
};
console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
let unique = Symbol('id');
console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
typeof [];
typeof {};
// Array

// function
console.log(typeof alert);

// this
