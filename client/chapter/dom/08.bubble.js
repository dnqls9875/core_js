/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = document.querySelector('section'); // getNode()
const article = document.querySelector('article'); // getNode()
const p = document.querySelector('p'); // getNode()

section.addEventListener('click', (e) => {
  // console.log('%c section', 'color:dodgerblue'); // %c는 css 주겠다.
  console.log('target :', e.target);
  console.log('currentTarget :', e.currentTarget);
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:hotpink'); // %c는 css 주겠다.
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:orange'); // %c는 css 주겠다.
// });

/* 캡처링 ----------------------------------------------------------------- */
