// 숫자를 넣게 되면 저절로 이 2개의 합이 계산 되어서 나올 수 있도록
// clear를 누르면 값이 없어져야 한다.

// named export -> import 시 무조건 { getNode, insertLast }로 받아야 함 // 객체가 나오는 거라 구조 분해 할당으로 할 수 있다.
// default export -> 중괄호 없이 받을 수 있다. 딱 export 하나만 하면 할 수 있다.

// import { getNode as $, getNodes } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import clearContent from './lib/dom/clearContent.js';

import { getNode as $, getNodes, insertLast, clearContents, typeError, refError, syntaxError } from './lib/index.js';

function phase1() {
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
  const clear = $('#clear');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = Number(second.value);
    const total = firstValue + secondValue;

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

function phase2() {
  // 위임을 잡을 때는 가장 큰 부모를 잡아야 함
  const calculator = document.querySelector('.calculator');
  const result = document.querySelector('.result');
  const clear = document.querySelector('#clear');

  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  // 합 더할 때는 reduce를 사용하자
  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + cur.value * 1, 0); // input의 값을 가져와서 사용할 때는 문자다 그래서 문자 앞 + 뒤에 *1,/1할 것

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    // numberInputs.forEach((input) => {
    //   clearContents(input);
    // });
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

phase2();
