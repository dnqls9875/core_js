/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable => 열거 가능한
// iterable => 반복 가능한 (순환이 되는지 안되는지?)
// ^ mutable => 변경 가능한 🔆🔆🔆🔆🔆

// for...of => iterable 요소만 사용 가능.

// 배열은 iterable 합니다.

// 1. 순서(index)가 있다.
// 2. length가 존재

// 유사배열
// 확인하려면 그때마다 열어보면 된다.

const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3,
  // Symbol(Symbol.iterator) (){} 가 있어야 iterable 하다.
};

// Symbol(Symbol.iterator) 가 있어야 iterable 하다.
// ? Uncaught TypeError: arrayLike is not iterable

// for (const key of arrayLike) {
//   console.log(arrayLike[key]);
// }

const message = new String('안녕 자바스크립트'); // ? iterable함
// const message = '안녕 자바스크립트'; // iterable 하지 못함

for (const key of message) {
  console.log(key);
}

// console.table 꿀팁

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기
// 배열에 value 값들을 조회

// for (const value of languages) {
//   console.log(value.id); // 객체에 id 키 값을 조회
//   // console.log(value[id]); // 객체에 id value 값을 조회 ?궁금함
// }

/**
 * 1. name 조회
 * 2. 포함 여부 확인 (Java)
 * 3. if문 작성
 * 4. continue 지시자 작성
 */

for (const value of languages) {
  const name = value.name;
  if (name.includes('Java') && name.length < 5) {
    continue;
  }
  console.log(name);
}

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 할 수는 있지만 너무 지저분하고, 복잡하다
// 재귀함수를 만들어 사용하는게 정신건강에 좋다.
Object.prototype.nickName = 'tiger';

// for (const value in randomUser) {
//   if (Object.hasOwn(randomUser, value)) {
//     const L1 = randomUser[value];
//     console.log('\t', L1);
//     if (typeof L1 === 'object') {
//       for (const value in L1) {
//         if (Object.hasOwn(L1, value)) {
//           const L2 = L1[value];
//           console.log('\t\t', L2);
//           if (typeof L2 === 'object') {
//             for (const value in L2) {
//               if (Object.hasOwn(L2, value)) {
//                 const L3 = L2[value];
//                 console.log('\t\t\t', L3);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

for (const keyValue of Object.entries(randomUser)) {
  const key = keyValue[0];
  const value = keyValue[1];

  if (typeof value === 'object') {
    for (const keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];

      if (typeof value === 'object') {
        for (const keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];
        }
      }
    }
  }
}

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

// % for문 : 모든 데이터 순환용 => 작성 코드가 많기 때문에 무한 루프의 여지가 생길 수 있다.
// % for..in문 : 객체 순환용 => 정해진 아이템의 갯수만큼 순환 => 배열 순환용으로는 적합하지 않다.(순서가 랜덤이라)
// % for..of문 : iterable 요소 순환용 => 정해진 아이템의 갯수만큼 순환 => 배열 순환용으로 적합하다.

// name을 변수명이나 객체 키 식별자로 저장하지 않는 이유? window에 내장된 이름이기 때문

const obj = {
  nickName: 'tiger',
  age: 40,
};

// 객체인데 for..of문을 사용하고 싶다.. 미치도록
// 1. Symbol.iterable => 핵귀찮음
// 2. 객체를 배열로 만들어버려라!

// 객체의 static method
const keys = Object.keys(obj); // 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const values = Object.values(obj); // 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const entries = Object.entries(obj); // 객체의 key,value들을 모아 한 쌍의 배열을 이루는 새로운 배열을 '반환'하는 유틸 함수

// console.log(entries);

// entries 키와 값을 인덱스로 접근 가능

for (const [key, value] of Object.entries(obj)) {
  console.log(key); // key에 접근
  console.log(value); // value에 접근
}
