function f1() {
  // arguments 가질 수 있음 (유사 배열)
}

const f2 = function () {
  // arguments 가질 수 있음 (유사 배열)
};

const f3 = (...rest) => {
  // arguments 가질 수 없음
  console.log(rest);
};

f3(1, 2, 3, 4);
