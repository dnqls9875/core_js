// Model -> 데이터 모델
// View -> 랜더링
// Control -> event

// ? 다시한번 class 이용해서 만들어보기

class Todo {
  // 객체 구조분해 할당
  constructor({ input, button, renderPlace }) {
    // const { input, button, renderPlace } = obj;
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.attachEvent();
  }

  // getter 로 사용되면 함수처럼 못 사용한다.
  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

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

  addTodoData() {
    this.todoListArray.push(this.currentInputTodoData);
  }

  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    this.input.value = '';
  }
  createTag() {
    return `<li>${this.currentInputTodoData}</li>`;
  }

  handleClick() {
    console.log(this.currentInputTodoData);
    this.#render();
  }

  attachEvent() {
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.addTodoData();
      this.handleClick();
    });
  }
}

// 매개변수가 많아지면 객체로 받아라!
const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList',
});

const todo2 = new Todo({
  input: '.todo2',
  button: '.btn2',
  renderPlace: '.todoList2',
});
