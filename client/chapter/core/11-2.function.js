// 함수 표현식
/**
 * 함수는 값으로 취급된다. (일급 함수)
 * 함수 선언 2가지 방법
 *
 */

// 콜백함수 사용 목적은 함수 안쪽에 있는 값을 사용하려고
// 함수안에서 인수로 함수를 전달해주기 위한 것

/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체가 존재 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for..of문
  // for (const value of arguments) {
  //   total += value;
  // }

  // array method 방법

  // const arr = [...arguments]; // spread syntax
  // const arr = Array.from(arguments); // 배열을 만들겠다는 의미에서 명시적이다. 배열의 static method
  const arr = Array.prototype.slice.call(arguments); // ? 배열의 instance method 배열만 쓸 수 있는 능력 arguments는 유사 배열이므로 call로 배열의 능력을 빌려와야함

  // Array instance method

  // ! forEach 시 화살표 함수를 사용하는 이유는 this 바인딩이 화살표함수는 상위요소에서 찾기 때문에
  // 일반 함수는 window를 바인딩하고
  // forEach는 반복만 처리하고 어떤 값도 내보내지 않는다.
  // 배열을 순환 => 값을 반환하지 않는다.

  arr.forEach(function (price) {
    total += price;
  });

  // ! reduce 배열을 순환 => 값을 반환 문자,숫자,객체,배열,함수
  // acc : 누적기, cur : 현재 값, index : 현재 인덱스
  // total = arr.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);

  // reduce + arrow function
  // return arr.reduce((acc, cur) => acc + cur);

  // arguments
  // 일회성 한번만 빌려쓰는 방법
  // Array.prototype.forEach.call(arguments, function (price) {
  //   total += price;
  // });

  // ! 자바스크립트는 상속을 강제로 변경 할 수 있다.
  // ? 부모 바꿔치기
  arguments.__proto__ = Array.prototype; // __proto__ 던더 프로토
  console.log(arguments);

  // arguments 함수 안에서만 사용할 수 있음 내장 메서드
  console.log(total);

  // console.log(total);
};
const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);
console.log(result);

console.log('-------------------');

const obj = {
  total: null,
  item: [1000, 2000, 3000],
  totalPrice() {
    this.item.forEach((price) => {
      this.total += price;
    });
  },
};

obj.totalPrice();

// Array instance method => 알고리즘 단골 문제들이다.
// forEach : 배열을 순환 => 값을 반환하지 않는다.
// reduce : 배열을 순환 => 값을 반환한다.
// map : 배열을 순환 => 값을 반환 (새로운 배열)

const friends = ['이강현', '박혜미', '공세현', 'MJ'];
const f = friends.map(function (name, index) {
  // return `<li class="box-0${index + 1}">이름 : ${name}</li>`;
  return `<li data-order="${index + 1}">이름 : ${name}</li>`;
});

f.forEach(function (tag) {
  document.body.insertAdjacentHTML('beforeend', tag);
});

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
// 콜백 함수 => arrow function (호출하는 인수부분에)

let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  true,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다!');
  }
);

// arrow function
cb(
  true,
  () => console.log('성공입니다!'),
  () => console.log('실패입니다!')
);

a(1);

function a(a) {
  console.log(a);
}

function movePage(url, success, fail) {
  if (url.includes('https')) {
    // 서버 통신 끝나면 나중에 해줘.  success(url);
  } else {
    fail();
  }
}

// 콜백함수 => arrow function

movePage(
  'https://www.daum.net',
  function (url) {
    return `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`;
  },
  function () {
    console.log('잘못된 경로를 입력하셨습니다.');
  }
);

// arrow function

movePage(
  'https://www.daum.net',
  (url) => `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
);

// 콜백함수
function getGeolocation(success, fail) {
  let data;

  navigator.geolocation.getCurrentPosition((so) => {
    success(so.coords.latitude);
  });
  return data;
}

getGeolocation(
  (data) => {
    console.log(data);
  },
  () => {}
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

/**
 * 함수가 선언됨과 동시에 실행되는 것을 말합니다.
 *
 * var 블록 스코프 : x
 * var 함수 스코프 : o
 *
 * encapsulation (캡슐화) => 변수를 보호하기 위해서 사용
 *
 * 모듈 프로그래임 => import export
 */

const MASTER = (function (g) {
  console.log(g);

  var uuid = 'dfadfsdafsadfsdaf';
  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

console.log(MASTER);
