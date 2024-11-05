/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
  hasOwnProperty() {
    return '안녕!';
  },
};

Object.prototype.nickName = 'tiger';

/**
 * in문은 객체 안에 toString이라는게 있어?
 * in문은 조상까지 확인을 하기 때문에 객체에 설정하지 않아도 있다고 나온다.
 */
console.log('nickName' in javaScript); // true -> 위에 prototype으로 추가했다. 하면 안돼는 행위
console.log('toString' in javaScript); // true

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('toString'));
/**
 * ? 객체 object 값에 접근하여 hasOwnproperty 한 것
 * ? 위에 객체에 hasOwnProperty 값을 추가해줘서 위에 처럼 하면 덮어 쓰여진다(오버라이드)
 * ? 이렇게 덮어 씌어지면 문제가 생길 수 있다.
 * ? 객체 안에 있는 키값에 접근해서 value를 순환해야 하는 경우가 많이 있어서 가장 많이 사용하는게
 * ? hasOwnProperty라서 그래서 가장 상위에 Object method를 사용해야 한다.
 */

console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName')); // false
/**
 * ? Object.prototype.hasOwnProperty 접근하려면 call로 빌려쓴다.
 * ? function hasOwnproperty.call([누가빌려쓸건데?] javaScript, [뭐를?]'키')
 */

console.log(Object.hasOwn(javaScript, 'createAt'));
/**
 * ? hasOwn(누가?, '뭐를?')새로 생긴 기능
 * ? 구식 브라우저에서는 잘 안된다. ex) 정부관련 사이트
 * ? prototype도 없고, call도 없는 이유?
 * ? 객체에 능력은 method / method는 크게 두가지로 나뉜다.
 * ? instance method : 생성자 함수를 통해 생성된 객체만 사용할 수 있는 능력의 함수
 * ? static method : 객체 생성 없이 사용 할 수 있는 util method ex) concat, forEach
 */

// const hello = 'a';
// hello.toLowerCase(); // instance method

/**
 * ? 숫자도 사용하려면
 * ? String.prototype.toLowerCase.call(123)
 */

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// 객체의 key를 조회
// 객체의 value를 조회?

// for in문을 많이 쓴다 그 이유는 객체에 접근할 상황은 너무 많다.
// 객체에 접근은 하는데 조상까지 찾기 때문에 안전하게 객체에 접근하기 위해
// hasOwn 메서드를 함께 같이 많이 사용한다.

const user = {
  name: 'tiger',
  email: 'tiger@naver.com',
  phone: '010-2123-5454',
  gender: 'male',
};

for (const key in user) {
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    const element = user[key];

    console.log(element);
  }
}

for (const key in javaScript) {
  // console.log(javaScript); // 객체의 key값을 조회
  // console.log(javaScript[key]); // 객체의 value값을 조회

  // Object.hasOwn(javaScript, key)
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    const value = javaScript[key]; // console.log(javaScript[key])
    console.log(value);
  }
}

console.clear();

// 배열 객체 순환에 사용할 경우?
// 배열도 for in문으로 순환이 가능은 하다. 느낌이 이상하다. 안되는 이유 mdn검색
// 배열은 순서에 민감한 데이터이기 때문에 for...in문은 순서를 보장하지 않는다.
// 데이터가 많아지면 자기 마음대로 출력 될 가능성이 높다.
// forEach 등등 적합
// for..in은 객체에 양보하세요
const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  // console.log(tens[key]);
}

for (const key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    const value = javaScript[key];
    console.log(value);
  }
}

// enumerable : 열거 가능한
const obj = {}; // 조상에 포함된 인스턴스

obj.nickName = 'lion';

// 이렇게 접근하면 열거 불가능한 객체
// 안전하게 객체 설정하는 것
Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true, // 기본값은 false라서 출력해도 나오지 않음
  writable: false, // false로 하면 age 객체 value값을 변경하지 못함.
  configurable: false, // flase로 하면 delete를 하지 못한다.
}); // 조상

//  defineProperties를 이용해서 객체 여러가지 설정
Object.defineProperties(obj, {
  age: {
    value: 30,
    enumerable: true,
    writable: false,
    configurable: false,
  },
  email: {},
});

// Object.freeze(javaScript);   // ? 객체를 얼려버려 수정 삭제가 안된다.

console.log(obj);

for (const key in obj) {
  console.log(key);
}
