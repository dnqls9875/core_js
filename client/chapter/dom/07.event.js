/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

// 2. DOM 프로퍼티 : element.onclick = handler
const about = document.querySelector('.about');
const home = getNode('.home');

// ? 함수 본문을 onclick에 할당해줘야 함
// ? about.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handler(e) {
  console.log(e.offsetX);
}

about.addEventListener('wheel', handler);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  // const x = e.offsetX;
  // const y = e.offsetY;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;

  const templete = `
  <div class="emotion" style="top:${y}px; left:${x}px">🍍</div>
  `;
  ground.insertAdjacentHTML('beforeend', templete);
  // insertLast(ground, templete);
}
ground.addEventListener('mousemove', handleMove);

// 쿠팡
// 검색을 할때마다 연관검색어가 나오는데
// 글짜를 쓰는 순간 마다 통신이 일어난다. 그럼 통신이 많이 일어난다는 것

// debounce
// bounce를 막아준다.
// 웹에서는 이벤트를 많이 걸으면 부화가 많이 온다.
// 그래서 그걸 막아줬다가 마지막에 한번 튕겨준다.
// 여러번 일어나는 이벤트를 막아주고, 마지막에 한번만 실행
// 성능적인 이슈를 해결하기 위한 개념

// throttle
// 쓰는 중간 중간 마다 데이터를 가져와주는것
// 데이터 통신은 공짜가 아니다 모두 비용이다.

const input = getNode(input);

function handleInput() {
  if (this.value === 'seonbeom@gmail.com') {
    //
  }
}

input.addEventListener('input', handleInput);
