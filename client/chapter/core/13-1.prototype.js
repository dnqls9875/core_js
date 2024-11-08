/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 흐리멍텅한 색깔은 (개발자도구) enumerble
// get , set = enumerble (열거 불가능한)

// 조상 설계를 한다면 모든 능력을 상속 받을 수 있다.

// 객체 리터럴 방식

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    // getter
    return this.stomach;
  },
  set eat(food) {
    // setter
    this.stomach = [];
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

const 한라산호랑이 = {
  name: '한돌이',
  color: 'orange',
  __proto__: tiger,
};

// object constructor function
// 생성자 함수
// getter setter funtion을 구분하지 않는다.

function Animal() {
  this.reg = 4;
  this.tail = true;
  this.getEat = function () {
    return this.stomach ?? [];
  };
  this.setEat = function (food) {
    this.stomach = [];
    this.stomach.push(food);
  };
}

// const a = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  };
}

// Tiger.prototype = a;

const 금강산호랑이 = new Tiger('금순이');

// call -> 함수를 대신 실행시켜줌 -> 빌려쓰기 => 안에 this를 바꿔야 하는 경우에
// apply
// bind

function sum(a, b) {
  console.log(this, a + b); // 여기서의 this는 window임
}

sum.call('안녕!', 10, 20);
