//% /* &generic Typd */ 아주 중요 // 모든걸 포함 수용하는 타입
function sumFunc(value) {
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
function swapAtoB(a, b) {
    return [b, a];
}
swapAtoB(1, true); // [true, 1];
// function getLength<T extends { length: number }>(data: T) {
//   return data.length;
// }
function getLength(data) {
    return data.length;
}
const b1 = getLength([1, 2, 3]);
const b2 = getLength("hi");
const b3 = getLength({ name: "tiger", length: 3 });
export {};
