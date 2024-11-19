const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
// header의 높이값을 가져와서 depth의 top값으로 설정
const header = document.querySelector('#header');

const h = (d) => (d.style.height = 0);

function vanilla() {
  // elem.offsetHeight
  console.log(header.offsetHeight);

  // depth top값 설정 코드
  depthList.forEach((depth) => (depth.style.top = header.offsetHeight + 'px'));

  aList.forEach((a) => {
    // 이벤트 바인딩 mouseenter event => console this 출력

    a.addEventListener('mouseenter', (e) => {
      // 현재 선택된 a 태그 안에 있는 depth 찾기
      // cureentTarget + lastElementChild
      const currentDepth = e.currentTarget.lastElementChild;

      // depth에게 높이 주기 100px
      // node.style.height = ???

      // 모든 depth 높이 제거하기 0px
      // 모든 depth 가져오기 style 제거

      depthList.forEach(h);
      // depthList.forEach((depth) => (depth.style.height = 0)); //! 이렇게 사용해도 됨

      currentDepth.style.height = '100px';
    });
  });

  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

/* global gsap */

// gsap은 to, form, set을 많이 사용한다.

gsap.set(depthList, { top: header.offsetHeight });

aList.forEach((a) => {
  const currentDepth = a.lastElementChild;

  const tl = gsap.timeline({ pused: true }).to(currentDepth, { height: 100, ease: 'power2.inOut' });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
