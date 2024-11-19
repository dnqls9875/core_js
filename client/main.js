// 숫자를 넣게 되면 저절로 이 2개의 합이 계산 되어서 나올 수 있도록
// clear를 누르면 값이 없어져야 한다.

// named export -> import 시 무조건 {}로 받아야 함
// default export -> 중괄호 없이 받을 수 있다. 딱 export 하나만 하면 할 수 있다.

// import { getNode as $, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import clearContent from './lib/dom/clearContent.js';

import { getNode as $, getNodes, insertLast, clearContents, typeError, refError, syntaxError } from './lib/index.js';

/**
 * 1. input 선택하기 ✅
 * 2. input 이벤트 바인딩 ✅
 * 3. input의 value 값 가져오기
 * 4. 숫자 더하기
 * 5. result 에 출력하기
 */

const first = $('#firstNumber');
const second = $('#secondNumber');
const result = $('.result');

function handleInput() {
  const firstValue = Number(first.value);
  const secondValue = Number(second.value);
  const total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
