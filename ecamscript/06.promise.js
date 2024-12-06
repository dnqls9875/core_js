console.log(1);
console.log(2);
console.log(3);
console.log(4);

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (condition) {
      resolve("성공~");
    } else {
      reject("실패~");
    }
  }, 3000);
});

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// async await

// 무조건 Promise<Object> 객체 반환
async function f() {
  return1;
}

// [[PromiseResult:1]]

const a = await f();

a; //1
