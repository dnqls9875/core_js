const MORNING = '아침';
const LUNCH = '점심';
const DINNER = '저녁';
const NIGHT = '밤';
const LATE_NIGHT = '심야';
const DAWN = '새벽';

let thisTime = MORNING;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('아무것도 안할래요');
    break;
}

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('아무것도 안할래요');
}

// let inputNumber = +prompt('0부터 6까지 숫자를 입력하세요');

function getRandom(n) {
  const value = Math.floor(Math.random(getDay) * n);
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

function weekend() {
  const today = getDay(getRandom(7));
  if (today === '토' || today === '일') {
    return `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`;
  } else {
    return `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`;
  }
}

weekend();
