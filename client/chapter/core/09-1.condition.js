/* ---------------- */
/* Condition        */
/* ---------------- */

// if (answer === 'ECMAScript') {
//   alert('정답입니다.');
// } else {
//   alert('정답은 ECMAScript입니다!');
// }

// const answer = prompt(`자바스크립트의 ‘공식’ 이름은 무엇일까요?`, '');
// const result =
//   answer == 'ECMAScript' ? '정답입니다' : '정답은 ECMAScript입니다!';

// alert(result);

// const result = prompt('숫자 입력해주세요', 0);

// if (result > 0) {
//   console.log(1);
// } else if (result < 0) {
//   console.log(-1);
// } else if (result == 0) {
//   console.log(0);
// }

// let a = 1;
// let b = 2;
// let result = a + b < 4 ? '미만' : '이상';
// console.log(result);

let login;

let message =
  login == '직원'
    ? '안녕하세요'
    : login == '임원'
      ? '환영합니다.'
      : login == ''
        ? '로그인이 필요합니다.'
        : '';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// ! 조건문은 2depth

// // 누구랑 볼거니?
// let didWatchMovie = confirm('아이언맨 영화 봤니?');
// let goingToWatchMovie;
// let goingWhoWatchMovie;

// if (didWatchMovie) {
//   console.log('진짜 재밌더라!!');
// } else {
//   let goingToWatchMovie = confirm('나랑 보러갈래?'); //
//   if (goingToWatchMovie) {
//     goingWhoWatchMovie = confirm('범쌤이랑 가자!');
//     if (goingWhoWatchMovie) {
//       console.log('범쌤 좋지~~ 재밌잖아');
//     } else {
//       console.log('나 범쌤이랑 어색해.. 너만 가라');
//     }
//   } else {
//     console.log('나도 너랑 보기 싫었어 사실');
//   }
// }

// function watchingMovie() {
//   // 영화 봤니?
//   let didWatchMovie = confirm('아이언맨 영화 봤니?');

//   // 영화 볼거니?
//   let goingToWatchMovie;

//   if (didWatchMovie) {
//     console.log('진짜 재밌더라!!');
//   } else {
//     let goingToWatchMovie = confirm('나랑 보러갈래?'); //
//     if (goingToWatchMovie) {
//       let withWho = prompt('누구랑 볼거니??');
//       if (withWho === 'you') {
//         console.log('그래 좋아 같이 보자!');
//       } else {
//         console.log('이유가 뭐야?');
//       }
//     } else {
//       console.log('나도 너랑 보기 싫었어 사실');
//     }
//   }
// }

let didWatchMovie = 'no';
let goingToWatchMovie = 'yse';

const msg = didWatchMovie.includes('yes')
  ? '영화 재밌더라 한번 봐봐'
  : goingToWatchMovie.includes('no')
    ? '같이 보자'
    : '그래..';

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
