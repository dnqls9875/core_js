/**
 * ! 변수는 변할 수 있는 수
 * ? 상수는 변할 수 없는 수
 * ? 상수는 할당 된 값을 바꾸지 못한다. 하지만 할당된 객체, 배열에는 접근하여 변경할 수 있다.
 * % 변수명은 변수가 담고 있는 것이 무엇인지 쉽게 알 수 있도록 지어져야 합니다. 의미 없는 짧은 이름은 피하자 ex) a, b, c
 */

// ! 변수
let message = "hello"; // hello
message = "hi"; // hi
// let message = "hi"; // ! let은 재선언 불가능 재할당 가능

console.log(message); // hi

// ? 상수
// ? 상수는 할당 된 값을 바꾸지 못한다. 하지만 할당된 객체, 배열에는 접근하여 변경할 수 있다.
// ? 상수 const는 선언과 할당이 동시에 이루어져야 한다.

const test = 1;
// test = 2;  // ! const는 재선언, 재할당 불가능하다.
console.log(test);

const array = [1, 2, 3];
array[0] = 3;
console.log(array); // [3, 2, 3]

const object = { name: "우빈" };
object.name = "이우빈";
console.log(object); // 이우빈

console.log("-----------------------------");

console.log("variable");

let admin;
let name;

name = "john";
admin = name;

console.log(admin);

let OUR_PLANT_NAME = "earth";
let currentUserName = "우빈";

console.log(OUR_PLANT_NAME, currentUserName);
