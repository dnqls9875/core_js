import { memo, attr, clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast } from './lib/index.js';

// setInterval 지속 호출

// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기 [배열 구조 분해 할당을 해보자 버튼이 3개기 때문에]
// 2. 클릭 이벤트 바인딩

// [주사위가 애니메이션이 될 수 있도록 만들어주세요.]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때 애니메이션 재생 or 정지]
// 1. toggle 하려면 상태변수가 필요 true | false
// 2. 조건 처리

// [기록 버튼을 누르면]
//

// [table이 등장]
// table 안쪽에 tr 태그 데이터를 넣고 랜더링
// 1. 태그 만들기
// 2. 랜더링 하기
// 데이터 : cube를 잡고 dice속성(주사위눈)

// [기록 누르면 밑에 지점 찾을 수 있게 scrollTop = scrollHegiht]

// [reset 버튼을 눌렀을 때 모든 항목 초기화]

// 배열 구조 분해 할당
const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

let isClicked = false;
let stopAnimation;

let count = 0;
let total = 0;

function createItem(value) {
  // ++count 이유는 계속 횟수가 추가되어야 하니깐
  const templete = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
 </tr>
  `;
  return templete;

  // 변수가 사용 될 때는 아래에 return 변수명
  // 변수 없을 땐 위에서 return 바로 해줘도 됨
}

function renderRecordItem() {
  // const diceNumber = +attr(getNode('#cube'), 'dice');
  const diceNumber = +memo('cube').getAttribute('dice') / 1;

  // getNode('tbody').insertAdjacentHTML('beforeend', templete);
  insertLast('.recordListWrapper tbody', createItem(diceNumber));
}

const handleRollingDice = (() => {
  // setInterval(() => {
  //   diceAnimation();
  // }, 100);
  // setInterval(diceAnimation, 100);

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;

      // 여기서 const, let 으로 변수를 지정하면 else clearInterval 값을 가져오지 못함
      // 이유는? 스코프에 갇혀있기 때문에 스코프 단위는 변수 전달이 안된다.
      // 그럼 전역에 스코프 밖 외부변수로 선언하고 재할당을 해주면 된다!
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked; // 반전시킨다.
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;
  renderRecordItem();
  // recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
  endScroll(recordListWrapper);
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
