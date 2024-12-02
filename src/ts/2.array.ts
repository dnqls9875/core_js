/* Array Type */

let arr: number[] = [1, 2, 3]; // === let _arr: Array<number> = [1, 2, 3];

let str: string[] = ["a", "b", "c"];

/* generic type 타입 변수 => 함수 */

let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ["a", "b", "c"];

// 유니온 타입 union type + array type
let multi: (string | number | boolean)[] = ["hello", 10, false];

multi = [20, "안녕", true]; // 타입 순서로 적는건 아니다. 또는 이기때문에
multi = [20, "안녕"]; // 3개중에 한개 제거해도 됨. 또는 이기때문에

// 자리를 정하면 안되나?

// 빼먹으면 안되는 건가?

/* 위의 의문이 바로 Tuple Type */
/**
 * % 길이가 고정되어 있다. 배열처럼 길이가 동적으로 변경되지 않음.
 * % 자리의 타입이 정해져있다.
 * % 대괄호 안에 타입정의 하면 Tuple Type
 */

let tupleA: [number, number] = [1, 2];

let person: [string, number] = ["우빈", 30];

// 다차원 배열을 줄 때 Tuple Type가 함께 하고 싶으면 아래와 같이
const user: [string, number][] = [
  ["심선범", 30],
  ["심섬범", 35],
  ["심섬밤", 32],
];
