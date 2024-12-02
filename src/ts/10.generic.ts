//% /* &generic Type */ 아주 중요 // 모든걸 포함 수용하는 타입
// T는 변수임 관례적으로 T라고 별칭

function sumFunc<T>(value: T): T {
  return value;
}

const a = sumFunc(10);
const b = sumFunc("hello");
const c = sumFunc(false);

/**
 * T : Type
 * U : Unknown or Unique
 * K : Key
 * V : Value
 * E : Element
 * R : Retrun
 */

// 하나만 변수를 설정할 수 있는 건 아니다. U는 unknown, 유틸리티, 유니크
function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(1, true); // [true, 1];

// function getLength<T extends { length: number }>(data: T) {
//   return data.length;
// }

// length의 객체의 속성값을 가지도록 확장
// 왜 객체를 확장하나요? length는 객체 속성이니깐
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

const b1 = getLength([1, 2, 3]);
const b2 = getLength("hi");
const b3 = getLength({ name: "tiger", length: 3 });
// const _b3 = getLength(false);
