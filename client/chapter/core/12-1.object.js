/* --------- */
/* Object    */
/* --------- */

// import { FileEnumerator } from 'eslint/use-at-your-own-risk';

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// auth : authentication (인증) / authorization (권한)
let authUser = null;

authUser = {
  uuid: crypto.randomUUID(),
  name: '우빈',
  email: 'dnqls9875@naver.com',
  isSignIn: false,
  permission: 'paid', // paid || free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// setter
console.log((authUser.permission = 'free'));

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

// setter
console.log((authUser['permission'] = 'paid'));

// 객체의 key만을 모아서 배열로 반환하는 객체의 static method?
const keys = Object.keys(authUser);

// keys
function getPropertiesKey(obj) {
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
}

getPropertiesKey(authUser);

// 객체의 value만을 모아서 배열로 반환하는 객체의 static method?
const value = Object.values(authUser);

function getPropertiesValue(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

getPropertiesValue(authUser);

// 객체의 key와 value를 하나의 쌍으로 묶어 배열로 반환하는 객체의 static method
const entries = Object.entries(authUser);

function getProperties(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj, obj[key]);
    }
  }
  return arr;
}

getProperties(authUser);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function creatUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

creatUser;
// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

console.clear();

// 프로퍼티 제거 or 삭제
// 제거(remove) or 삭제(delete)
//      비워두기        메모리날림

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'uuid');
authUser.uuid = null;

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// shorthand properties
const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10_100];

// 기본값 설정
// 순서(order)를 바꿀 수 없다. 변수명은 내맘대로 바꿀 수 있다.
const [a1, a2, a3, a4, a5 = 100_000] = arr;
// a1을 받기 싫으면 a1을 지워주는데 ,는 있어야 함
// a1 나머지는 ...rest

console.log(a5);

// const [a1, a2, a3] = arr; 아래와 같음
// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[2];

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  김미리: 800,
  박혜미: 130,
  이성우: 400,
  명재휘: 80,
  // 이영범: undefined, or 없는 상태
};

// 객체 값이 설정이 안되어있는 상태에서(undefined) 변수에서 기본값을 줄 수 있다.

/**
 * 객체의 구조 분해 할당은 순서가 상관 없다. (순서 중요x)
 * 객체의 key와 변수의 이름이 동일해야 함.
 * 중요한건 객체 분해 할당 시 객체에 존재하는 이름들만 가져와서 분해 할당 할 수 있다.
 * 변수명 변경 가능
 *
 */

// 박혜미:박 => 별칭을 지어줬다.
const { 김미리, 박혜미: 박, 이성우, 명재휘, 이영범 = 300 } = salaries;

// console.log(박혜미); [x]
console.log(박); // [o]

console.log(이영범);

// createUserObject은 data라는 객체 인수를 가지고 있음 인자로도 객체가 옴
function createUserObject({ name, age, address, ...rest } = {}) {
  console.log(rest);

  // name,age,address를 제외한 나머지
  // 왜 구조 분해 할당 하느냐?
  // obj.name, obj.age 너무 번거롭다.
  // const { name, age, address, phone, job } = obj;

  return { name, age, address }; // ! 이건 객체를 만들어낸거지 객체를 구조 분해 할당한 건 아님
}

const data = {
  name: '이우빈',
  age: 30,
  address: '양주시',
  phone: '010-9875-4080',
  job: '백조',
};

const user = createUserObject(data);
// const user = createUserObject('심선범', '35', '중랑구', '010-7169-0262', '강사');

const { log } = console;

log('안녕');
