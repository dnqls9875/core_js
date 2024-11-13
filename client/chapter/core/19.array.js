// & pop은 마지막 아이템 제거 => 제거한 아이템 반환 // 가능한 제거하기 위해서는 pop을 사용
// & push은 마지막 아이템 추가 => 배열의 길이 반환

// & shift 앞 아이템 제거  => 제거한 아이템 반환 // 데이터 많으면 앞 요소 제거하는게 위험함
// & unshift 앞 아이템 추가 => 배열의 길이 반환

/* -------------------- */
/* Array Type           */
/* -------------------- */

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용.
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.

// 배열 선언

let friends = '혜미 종국 주연 현주 재휘 현지'.split(' ');

// 배열 요소의 총 갯수
let length = friends.length; // [6]

// 배열 요소 변경
friends[0] = '효준';

// 배열 요소 추가 -> length값을 반환
let unshift = friends.unshift('우빈'); // 앞 추가
let push = friends.push('유진'); // 뒤 추가

// 배열 요소 제거
let shift = friends.shift(); // 앞 제거
let pop = friends.pop(); // 뒤 제거

console.log(friends);
// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑

// 배열 요소 순환(loop)
// for 문, for ~ of문

// 배열 복사
// let copiedArray = [...friends];
// let copiedArray = friends.slice();
let copiedArray = Array.from(friends);

// let arr = friends // !이건 참조 복사라 객체처럼 사용됨 배열 복사 아님.

// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
