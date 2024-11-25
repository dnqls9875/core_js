import { setStorage, getStorage, clearContents, deleteStorage } from './lib/index.js';

// input 이벤트 바인딩
// 2. input 값을 로컬 스토리지에 저장(타이핑 하는 순간마다)
// 3. init 함수 안에서 로컬스코리지에 있는 값을 가져와 input의 value로 설정
// 4. 새로고침 => 데이터 유지

const textField = document.querySelector('#textField');
const button = document.querySelector('button[data-name="clear"]');

function handleInput(e) {
  e.preventDefault();
  const value = this.value;
  setStorage('text', value);
}

function handelClear() {
  textField.value = '';
  deleteStorage('text');
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}

init();

textField.addEventListener('input', handleInput);
button.addEventListener('click', handelClear);
