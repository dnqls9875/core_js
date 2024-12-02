let obj;
obj = { x: 10 };
obj = 123;
obj = function () { };
obj.toUpperCase();
/* unknown type */
let arr;
arr = 1;
arr = "hello";
// 타입 좁히기 (narrowing)
if (typeof arr === "number") {
    arr.toFixed();
}
export {};
