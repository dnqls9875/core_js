// & 삼각함수를 이용한 것 = 직각 삼각형
// 원운동,진동, 원하는 각도로 이동

// cos @ x 좌표
// sin @ y 좌표

// 360도 = 2PI
// 180도 = PI
// 180분의 PI radiaun 계산법

function toRadian(degree) {
  return degree * (Math.PI / 180);
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

const circle = document.querySelector('.circle');

let degree = 45;
let radius = 10;

let lastInsertTime = 0;

function animate() {
  degree = degree + 0.3;
  radius = radius + 0.3;

  const x = Math.cos(toRadian(degree)) * radius;
  const y = Math.sin(toRadian(degree)) * radius;

  circle.style.transform = `translate(${x}px,${-y}px)`;

  const currentTime = Date.now();

  if (currentTime - lastInsertTime >= 300) {
    const tag = `
    <div style="transform:translate(${x}px,${-y}px)">🏃‍♂️</div>
  `;

    document.querySelector('.space').insertAdjacentHTML('beforeend', tag);

    lastInsertTime = currentTime;
  }
}

setInterval(animate, 0);
