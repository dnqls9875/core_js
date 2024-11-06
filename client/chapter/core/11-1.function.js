// 함수는 내부 -> 파라미터 -> 외부에서 변수를 찾는다. 스코프체이닝

// 함수에 실행이 되는 순간 메모리에 저장이 되고 함수가 종료 되는 순간 인터넷 최적화를 위해 메모리를 지워준다.
// 변수는 함수 내부에서 설정하는 것이 가장 안전하다.

/**
 * ? 함수 이름짓기
 * ? "get…" – 값을 반환함
 * ? "calc…" – 무언가를 계산함
 * ? "create…" – 무언가를 생성함
 * ? "check…" – 무언가를 확인하고 불린값을 반환함
 *
 */

/** 함수 동작 원리
 * & 1. function name
 * & 2. arguments(함수 실행부)
 * & 3. parmeter
 * & 4. return value
 * & 5. validation
 * & 6. Test Driven Development (TDD)
 */

/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

console.clear();

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언
function calcPrice(priceA, priceB = getRandomValue(), priceC = getRandomValue(), priceD = getRandomValue()) {
  // if(priceD === undefined) priceD = 0;
  // if(!priceD) priceD = 0;
  // priceD = priceD || 100;
  // priceD ||= 0;
  // priceD = priceD ?? 100;
  // priceD ??= 100;

  if (!priceA) {
    // throw new Error('calcPrice 함수는 첫번째 인자에 숫자가 들어와야 합니다.');
  }

  return priceA + priceB + priceC + priceD;
}

// 함수 호출
const result = calcPrice();
// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem;
function rem(pxValue, base = 16) {
  if (!pxValue) {
    throw new TypeError('rem 함수의 첫 번째 인수는 필수 입력 값입니다.');
  }
  if (typeof base === 'string') {
    throw new TypeError('rem 함수의 두 번째 인수는 숫자 타입이여야 합니다.');
  }
  if (typeof pxValue === 'string') {
    pxValue = parseFloat(pxValue, 10);
  }
  return pxValue / base + 'rem';
}

// assert는 이 함수는 일치해야된다고 주장하는 것 test

console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');

console.clear();

// css(node: string, prop: string, value: number|strung) : string;
// let css;

// function setCss(node, prop, value) {
//   const target = document.querySelector(node);
//   target.style[prop] = value;
// }

const first = document.querySelector('.first');

function setCss(node, prop, value) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!(prop in document.body.style)) {
    throw new TypeError('setCss 함수의 두 번째 인수는 유효한 css 속성이여야 합니다.');
  }
  if (!value) {
    throw new TypeError('setCss 함수의 세 번째 인수는 필수 값입니다.');
  }

  node.style[prop] = value;
}

console.log(setCss('.first', 'color', 'skyblue'));

// getComputedStyle('태그').background; // ? 자바스크립트 돔에 접근해서 스타일 값을 가져오는 방법

function getCss(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!(prop in document.body.style)) {
    throw new TypeError('getCss 함수의 두 번째 인수는 유효한 css 속성이여야 합니다.');
  }

  return getComputedStyle(node)[prop];
}

const fontSize = getCss(first, 'color');
console.log(fontSize);

// 관심사의 분리
function css(node, prop, value) {
  // if (!value) {
  //   // getter
  //   return getCss(node, prop);
  // } else {
  //   // setter
  //   setCss(node, prop, value);
  // }

  return !value ? getCss(node, prop) : setCss(node, prop, value);
}

// 값이 있냐 없냐 차이
css('.first', 'color');
css('.first', 'color', 'red');

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

/**
 * & 1. 함수는 하나의 기능만을 수행해야 한다.
 * & 2. 함수는 재사용성이 좋아야 한다.
 * & 3. 함수는 이름을 잘 지어야 한다. (동사) => 가독성 => 읽었을 때 바로 기능을 알 수 있게 작성.
 * & 4. 인자를 많이 사용하지 않는다. (최대 4~5개)
 */
