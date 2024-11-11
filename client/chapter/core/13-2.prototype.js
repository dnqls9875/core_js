/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Object literla -> function constructor -> class syntax

// class 문법은 함수이지만 매개변수 받을 곳은 없다.
// constructor에 매개변수를 넣을 수 있다.

class Animal {
  legs = 4; // 여기에 정의하는게 pubilc class filed 그냥 명시해주는 거로 생각하면 됨
  tail = true;
  #name = 'unknown'; // privite class filed 변수를 보호해준다.

  // constructor는 최초 1회만 실행된다. -> 초기화에 사용됨
  constructor(name) {
    this.#name = name;
    this.stomach = [];
    console.log(this.#name);

    // ? pubilc class filed 위에 작성했기 때문에 아래는 주석처리
    // this.legs = 4;
    // this.tail = true;
  }

  // class에서도 get set 만들 수 있음.
  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

// const options = {
//   version: '1.0.0',
//   company: '8b-studio',
//   ceo: '심선범',
// };

class Tiger extends Animal {
  // 캡슐화 위에 객체 처럼 사용하지 않은 이유는?
  // 전역을 오염하는 행위이기 때문에.
  // static 을 사용하면 Tiger라는 곳에서만 사용 할 수 있는 static 메서드
  static options = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이 무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound + '🐱';
  }
  // static 을 입력하지 않으면 호랑이.bark('문자열')으로 작성할 수 있고,
  // static 을 입력하면 Tiger.bark('문자열)로 작성할 수 있음.
  // static은 밖에서도 접근이 가능함
}

// const a = new Animal('몽실이'); // 새로운 객체를 생성 생성자 함수
const 호랑이 = new Tiger('호돌이');

// const arr = new Array()

// arr.forEach()

// Array.isArray()

// class Array extends Object(){

//   forEach(){

//   }

//   reduce(){

//   }

//   static isArray(){

//   }
// }

/**
 * 1. 버튼 선택
 * 2. 클릭 이벤트
 * 3. 태그 만들기
 * 4. 태그 화면에 렌더링 하기
 */

class Button {
  constructor(selector) {
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  // class 안에서 _ 이걸 붙히면 함수 내부에서만 사용하겠다. 라는 뜻
  #render() {
    document.body.insertAdjacentHTML('beforeend', this.creatTag());
  }

  creatTag() {
    return `<div>${++this.count + 'clicked!'}</div>`;
  }

  clickHandler() {
    this.#render();
  }

  attachEvent() {
    // this.button.addEventListener('click', this.clickHandler.bind(this));
    this.button.addEventListener('click', () => this.clickHandler());
  }
}

const button = new Button('.btn');

// class로 변경 위에서
// const _button = document.querySelector('.btn');

// let count = 0;

// function creatTag() {
//   return `<div>${++count + 'clicked!'}</div>`;
// }

// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function clickHandler() {
//   render(creatTag());
// }

// _button.addEventListener('click', clickHandler);

class User {
  #password;

  constructor(userID, userPW) {
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    return 'hasCODE' + pw + '소금찹찹';
  }

  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'hello123');
