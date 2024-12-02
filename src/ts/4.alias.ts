/* alias type */
// 타입 별칭은 앞문자를 대문자로
// alias는 필수다 코드양을 줄여주기 위해서 마치 변수를 지정해놓고 가져다 쓰는 모습

/**
 * type
 *
 * interface
 */

// type

// type은 중복선언은 안되지만 type mixed로 병합 할 수 있음.

// type User = {
//   id: number;
//   name: string;
//   auth: string;
//   isPaid: boolean;
// };

type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

type User1 = {
  address: string;
};

type mixed = User & User1;

// interface
// & _User은 중복 선언 가능하며 , 위에 값과 병합을 한 것과 같다.

interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

// interface _User {
//   address: string;
// }

// % 차이점은 = 이 있고, = 이 없다.

const user1: User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

const user2: User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

const user3: User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

//% /* index signature */
// ? 객체의 키가 동적으로 결정될 때 유용하게 사용 가능

type Person = {
  name: string;
  age: number;
  [key: string]: string | number; // 키가 문자여야 하고, 값이 문자 아님 숫자여야 한다 라는 index signature
};

const person: Person = {
  name: "beom",
  age: 30,
  email: "tiger@naver.com",
  address: "경기도 양주시",
  phone: "010-2032-1232",
};
