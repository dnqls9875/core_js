/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handler(e) {
  console.log(e.wheelDeltaY);

  // console.log(e.offsetX,e.offsetY);
}

about.addEventListener('wheel', handler);

// const remove = bindEvent(about,'click',handler);
// home.addEventListener('click',remove)

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  // const { offsetX:x, offsetY:y } = e;

  // const x = e.offsetX
  // const y = e.offsetY

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - (w / 2)}px,${y - (h / 2)}px)`

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">🥰</div>
  `;
  insertLast(ground, template);
}

// debounce
// 쿠팡
// 검색을 할때마다 연관검색어가 나오는데
// 글짜를 쓰는 순간 마다 통신이 일어난다. 그럼 통신이 많이 일어난다는 것

// bounce를 막아준다.
// 웹에서는 이벤트를 많이 걸으면 부화가 많이 온다.
// 그래서 그걸 막아줬다가 마지막에 한번 튕겨준다.
// 여러번 일어나는 이벤트를 막아주고, 마지막에 한번만 실행
// 성능적인 이슈를 해결하기 위한 개념

function handle(e) {
  console.log(e);
}

ground.addEventListener('mousemove', debounce(handleMove, 100));

function debounce(callback, limit = 500) {
  let timeout; // undefined이기 때문에 무시하고 아래 코드가 실행

  clearTimeout(timeout);

  return function (e) {
    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

// throttle
// 쓰는 중간 중간 마다 데이터를 가져와주는것
// 데이터 통신은 공짜가 아니다 모두 비용이다.

function throttle(callback, limit = 500) {
  let wait = false;

  return function (...args) {
    if (!wait) {
      callback.apply(this.args);
      wait = true; // 여기서 한번 실행하고, wait이 true로 바꾸면서 종료
      setTimeout(() => (wait = false), limit); // 다시 여기서 0.5초 뒤에 false 바뀌면서 다시 실행후 종료 되면서 wait true -> 0.5초 뒤 false 반복
    }
  };
}

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
