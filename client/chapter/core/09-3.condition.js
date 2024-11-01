/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DAWN;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case NIGHT:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case DINNER:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('아무거토 안해요');
    break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === NIGHT) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === DINNER) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('아무거토 안해요');
}

/* switch vs. if -------------------------------------------------------- */

let a = 15;

switch (a) {
  case 10:
    console.log('10입니다');
    break;
  case 13:
    console.log('13입니다.');
    break;
  case 15:
    console.log('15입니다.');
    break;
  case 20:
    console.log('20입니다.');
    break;
  default:
    console.log('10,13,15,20 숫자가 없습니다.');
    break;
}

console.clear();

// prompt를 통해서 숫자를 입력 받는다. (0~6까지)
// 받은 숫자를 사용해서 switch case를 돌려준다.
// 랜덤을 만들어서 함수에 넣어보자

// 함수는 하나의 기능을 수행하는 것
// 함수는 재사용성을 고려해야 한다. (유연한 함수)
// speraction of concerns  (관심사의 분리)

// 0 : 일요일
// 1 : 월요일
// 2 : 화요일
// 3 : 수요일
// 4 : 목요일
// 5 : 금요일
// 6 : 토요일

// const weekDay = +prompt('0~6까지 숫자 입력해주세요', 0); // prompt는 문자라서 문자로 하려면 +

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value) {
  switch (value) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

//  getDay 함수를 가지고
//  주말인지 평일인지를 보여주는 함수를 만들어주세요
//  weekend

function weekend() {
  const today = getDay(getRandom(7));

  // if(today.includes('토') || today.includes('일')){

  //   return `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`;

  // }else{

  //   return `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`;

  // }

  return today.includes('토') || today.includes('일')
    ? `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`
    : `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`;
}

const day = weekend();
