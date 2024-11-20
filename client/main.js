import data from './data/data.js';
import { getNode as $, insertLast, getRandom, clearContents, addClass, removeClass, showAlert, isNumericString, shake, copy } from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭 하는 함수
//  - 주접 떨기 버튼 가져오기
//  - 이벤트 연결

//  2. input 갑 가져오기

// 3. data 함수에서 주접 1개 꺼내기
//  -n 번째 random 주접 꺼내기
// Math.random*()

// 4. result에  항목 랜더링 하기
//  -insertLast()

//  5. 예외 처리
//  - 이름이 없을 경우 콘솔에 에러 출력
//  - 숫자만 들어오면 콘솔에 에러 출력

const submit = document.querySelector('#submit');
const nameField = $('#nameField');
const result = $('.result');

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  // result.insertAdjacentHTML('beforeend', pick);

  // if (name === '') {
  //   throw refError('이름을 누락 하였습니다. 제대로 된 이름을 입력해주세요.');
  // } else if (typeof name === 'number') {
  //   throw refError('숫자를 입력하셨네요. 잘못 입력하셨어요.');
  // } else {
  //   insertLast(result, pick);
  // }

  if (name === '' || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용되지 않습니다.', 1200);
    // addClass(nameField, 'shake');

    shake(nameField);

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해주세요.', 1200);

    return;
  }
  // & console.log(isNaN(Number(name))); // isNaN NaN인지 아닌지 알 수 있다.

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;

  // 클립보드 저장하는 법 => 브라우저 방법
  // 브라우저와 소통하는 건 100% 성공하지 않는다. (불안정하다)
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);

// npm 조사.js // 은는이가 을를
