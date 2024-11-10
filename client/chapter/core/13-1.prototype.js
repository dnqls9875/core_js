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
    return this.stomach; // this: animal
  },
  set eat(food) {
    // setter
    this.stomach = []; // this: animal
    this.stomach.push(food); // this: animal.stomach.push(food)
  },
};

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.prey = target; // 현재 객체의 속성 target 값을 this.prey에 할당 즉 사냥할 대상을 prey에 저장
    this.eat = this.prey; // this.eat 속성에 this.prey 값을 할당합니다. 즉, 사냥할 대상(prey)을 먹이(eat) 속성으로도 저장합니다. prey와 eat 속성은 동일한 값을 가지게 됩니다.
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal, // animal 객체를 상속
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
