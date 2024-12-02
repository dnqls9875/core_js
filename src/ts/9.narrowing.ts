type Cat = {
  name: string;
  age: number;
};

// 타입스크립트에서 타입 정제를 할 때
// 정제할 값이 객체이면 특정 값 in 매개변수를 조회한다.

function f(x: number | string | Date | Cat) {
  // 타입 가드 (정제)
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed;
  } else if (x instanceof Date) {
    x.getTime();
  } else if ("age" in x) {
    console.log(x.age);
  }
}
