/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b); // false

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB); // ''

// Logical AND assigmnet
// ? a &&= b; // a = a && b -> a

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB); // 10

// Logical OR assigmnet
// ? a ||= b; // a = a || b -> 10

// 부정 연산자
let reverseValue = value;
console.log(!reverseValue); // true
console.log(!!reverseValue); // false

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && '  ' && [] && { thisFalsy: false };

// thisFalsy: false

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2, 3].length || { thisTruthy: true };  // 빈 배열이면 0이 반환되서 마지막 객체가 반환된다.

// [2, 3]

let userName = prompt('접속하시겠습니까?', '');

// 옵셔널체이닝 -> 때에 맞게 사용해야 한다. 너무 많이 사용하는건 지양
// if (userName?.toLowerCase() === 'admin') {
//   // 로그인 성공
//   let password = prompt('비밀번호를 입력해주세요', '');

//   // 대문자로 바꾸면 대문자로 소문자로 바꾸면 소문자로 비교해야 일치한다.
//   if (password?.toUpperCase() === 'THEMASTER') {
//     console.log('환영합니다!');
//   } else if (password === null) {
//     console.log('인증에 실패하였습니다.');
//   } else {
//     console.log('취소되었습니다.');
//   }
// } else if (userName === null || userName === '') {
//   console.log('취소되었습니다.');
// } else {
//   console.log('잘못된 정보입니다. 정확한 값을 입력해주세요.');
// }

// 함수는 return을 만나면 그 즉시 함수를 종료한다.

function login() {
  let userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName?.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해주세요');

    if (password?.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login();
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해주세요');
  }
}

login();
