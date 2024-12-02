/* void type */

// 함수의 리턴값은 string을 내보내는 함수다.
function sayHi(): string {
  return "hello";
}

// % 자바스크립트에서는 함수 안에 return 값이 없으면 undefined인데
// % 타입스크립트에서는 undefined도 값이다.
// % 어떤 값도 리턴하지 않을 거라는 걸 명시적으로 void를 통해서 선언해준다.
// % 함수의 리턴값이 없으면 대부분 void다.
// % 함수는 never 보다 void를 많이 사용한다.
function printHi(): void {
  console.log("hello");
}

printHi();

/* never type */ // 에러 , 무한루프

// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입

function showError(message: string): never {
  throw new Error(message);
}

showError("해당 함수는 에러가 발생했습니다.");

function loop(): never {
  while (true) {
    // ...
  }
}

function* gen(): Generator<number, void, void> {
  let count = 0;
  while (true) {
    yield ++count;
  }
}

/*
  Generator<T,R,P>



*/
