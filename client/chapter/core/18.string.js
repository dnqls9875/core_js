// enumerable: 열거 가능한
// iterable: 반복 가능한
// immutable: 불변

/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

// 부분 문자열 추출
let slice = message.slice(3, -1); // -1은 마지막 슬라이스
// let slice = message.slice(1); // 맨 앞만 슬라이스
// let slice = message.slice(); // 다 나옴
let subString = message.substring(2, 5); // 음수는 안됨. , 잘 사용하지 않음 slice 많이 사용
// let subStr = message.subStr();

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is'); // 해당하는 문자가 없으면 -1이 나옴 / 브라우저체크 하는 방법을 indexOf를 많이 사용됨

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Apple Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'FireFox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저에요..?';
  }

  return browserName;
}

let lastIndexOf; // 뒤에서 부터 찾아서 순서를 반환
let includes = message.includes('Less'); // 변수에 해당문자 포함이 되어있는 거 찾음
let startsWith = message.startsWith('Less'); // https://www.naver.com.startWith(https://) 이런거 할때 많이 사용 // 두개는 아무런 의미가 없음 첫문자 확인
let endsWith = message.endsWith('more.'); // 마지막 문자 확인

let str = '               a            b         c        d';

// 공백 잘라내기
let trimLeft = str.trimLeft(); // 많이 사용되지 않음
let trimRight;
let trim = str.trim(); // 양쪽 공백만 제거됨
let replaceAll = str.replaceAll(' ', ''); // 공백 제거
let replace = str.replace(/\s*/g, '');

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase(); // 소문자
let toUpperCase = message.toUpperCase(); // 대문자

// 텍스트 이름 변환 유틸리티 함수
// let toCamelCase;
// let toPascalCase;

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
