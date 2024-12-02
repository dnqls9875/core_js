import { Person } from "./type";

// 문제: Product 타입을 정의 후 union타입을 사용해 에러를 해결해주세요.

type Product = {
  id: string | number;
  name: string;
  price: number;
};

const product1: Product = {
  id: 12341,
  name: "컴퓨터",
  price: 590000,
};

const product2: Product = {
  id: "cpu-2000",
  name: "노트북",
  price: 460000,
};

// 문제: Contact타입을 정의 후 intersection을 사용하여 Employee를 만들어보세요.

// type Person = {
//   name: string;
//   age: number;
// };

type Contact = {
  email: string;
  phone: string;
};

type Employee = Person & Contact; // Person과 Contact를 교차시킴

// & interface 사용 시
// interface Employee extends Person {
//   email: string;
//   phone: string;
// }

const employee1: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  phone: "123-456-7890",
};
