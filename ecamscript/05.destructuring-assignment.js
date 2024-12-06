// 배열의 구조 분해 할당

const number = [1, 2, 3];

const [first = 10, second = 4, third] = number;

// 객체의 구조 분해 할당

const person = { name: "tiger", age: 40 };

const { name, age } = person;

//  함수 안에서 구조 분해 할당

const defult = {
  title: "tiger",
  timeout: 1000,
  message: "hello",
};

function f(options) {
  const config = { ...defult, ...options };

  const { title, timeout, me } = config;
}

f({ message: "bye" });
