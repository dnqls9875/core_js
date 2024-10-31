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
let double = '큰'; // string literal
let single = '작은';
let backtic = `인도의 ${double * 30}이 맛있다.`;

console.log(typeof double, typeof single, typeof backtic);
console.log(backtic);

const str = new String('hello'); // string constructor function (생성자함수)

// 4. 정수, 부동 소수점 숫자(길이 제약)
let integer = 150; // number literal
let decimalPoint = 3.14;

const num = new Number(23); // number constructor function (생성자함수)

console.log(typeof integer, typeof decimalPoint);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigInt = 1231546546542134n;
console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
let isActive = true;
let isFalse = false;

const bool = new Boolean(true); // boolean constructor function (생성자함수)

console.log(typeof isActive);
console.log(typeof isFalse);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
  name: '우빈',
  age: 30,
};

const obj_ = new Object(); // object constructor function (생성자함수)

console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
let unique = Symbol('id');
console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

// 객체에 메서드를 정의하는 방법

/**
 * 1. normal function
 * 2. arrow function -> 화살표함수는 protype constructor을 내장하지 않음 this를 바인딩
 * 3. concise method
 *
 *
 */

//  ! 생성자 함수는 무조건 객체를 생성한다. 암기
//  ?  암묵적으로 생성자함수는 앞글자를 대문자로 작성하고, new를 포함한다.
const fnc = new Object();

// ? this 나를 호출한 대상
// ? 메서드 안에서 this를 찾는 경우는 객체 자체를 선택해야 할 때
// ? arrow function은 this를 바인딩하지 않습니다. (상위 컨텍스트에서 this를 찾습니다.)
// ? 객체의 메서드를 정의 할 때 => concise method 권장. 이유는 this로 객체 자체로 바인딩 하기 때문에
// ? 메서드 안에서 함수를 정의해야 할 때 => arrow function 권장. 이유는 this를 찾기 위해서

const user = {
  name: 'tiger',
  age: 30,
  sayHi: function () {
    // console.log(this) // user
  },
  sayHi2: () => {
    // console.log(this); // window
  },
  sayHi3() {
    // console.log(this); // object (객체)

    function sayBye() {
      console.log(this);
    }
    sayBye(); // window가 호출했으므로 this를 찾으면 window객체가 나온다.

    // 화살표 함수의 this는 객체를 제대로 가져온다.
    const sayBye2 = () => {
      console.log((this.age = 30)); // age -> 30
    };
    sayBye2();
  },
};

// & 생성자 함수
// % 지속적으로 반복하는 값을 생성할 때 생성자 함수를 사용한다.
// ^ main constructor
function User2() {
  this.payment = false;
  this.age = 30;
}

// ? class User2 {} // 요새의 생성자 함수

// ! 인스턴스
const _a = new User2();
const _b = new User2();
const _c = new User2();
const _d = new User2();

// Array

const arr = [1, 2, 3, 4, 5];

const newArray = new Array(10); // [,,,,,,,,,,]
console.log(newArray); // 배열도 객체다. 배열은 순서가 정해져있다.

// function
// ? return을 하지 않으면 값은 undefined
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);

console.log(result); // 3

// ! 함수 예시

function 붕어빵틀(재료) {
  // 재료 : 인자 (paramter)
  return `따끈하고 맛있는 ${재료} 맛 붕어빵 입니다!`;
}
const 팥붕 = 붕어빵틀('팥'); // 팥 : 인수 (aguments)
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');

// this
