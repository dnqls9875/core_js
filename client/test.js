// 숫자를 넣게 되면 저절로 이 2개의 합이 계산 되어서 나올 수 있도록
// clear를 누르면 값이 없어져야 한다.

/**
 * 1. input 선택하기 ✅
 * 2. input 이벤트 바인딩 ✅
 * 3. input의 value 값 가져오기
 * 4. 숫자 더하기
 * 5. result 에 출력하기
 */
import { getNode, getNodes, insertLast, clearContents, isString, typeError, refError, syntaxError } from './lib/index.js';

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

function _clearContents(node) {
  if (isString(node)) node = getNode(node);
  if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = '';
    return;
  }
  node.textContent = '';
}

function handleInput(node) {
  const firstValue = Number(first.value);
  const secondValue = Number(second.value);
  const totalValue = firstValue + secondValue;

  // clearContents(result);

  _clearContents(result);

  result.insertAdjacentHTML('beforeend', totalValue);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
