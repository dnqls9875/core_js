// 버튼에 클릭 이벤트 등록 input 값이 콘솔창에 나올 수 있도록
/* 
  1. attachEvent 메서드를 만든다.
  2. 해당 메서드 안에서 button에게 click event를 바인딩 한다.
  3. click event에 연결할 handleClick 메서드를 만든다.
  4. handleClick 함수 안에서 input의 value를 가져온다.
  5. 콘솔창에 출력한다.
  6. 태그 만들기 
  7. 랜더링 하기 
  8. 배열에 데이터 담기
 */

class Todo {
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoArrayData = [];
    this.attachEvent();
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  addTodoData() {
    this.todoArrayData.push(this.currentInputTodoData);
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.creatTag());
    this.input.value = '';
  }

  creatTag() {
    return `<li>${this.currentInputTodoData}</li>`;
  }

  handleClick() {
    console.log(this.currentInputTodoData);
    this.#render();
  }

  attachEvent() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleClick();
      this.addTodoData();
    });
  }
}

const toto = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList',
});
