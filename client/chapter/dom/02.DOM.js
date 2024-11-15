/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// ! 주석처리
// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');
// console.log(second);
// console.log(_second.parentElement); // h1
// console.log(_second.previousElementSibling); // span.first
// console.log(_second.nextElementSibling); // button
// console.log(_second.children); //

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// document.nodeType == 9번임 MDN

// 1. nav 태그 요소
const nav = document.querySelector('nav');
console.log(nav);
const getNav = getNode('nav');
console.log(getNav);

// 2. nav 태그 안에 있는 about li 태그 요소
const aboutLi = nav.querySelector('ul>li:nth-child(1)');
// const aboutLi = nav.querySelector('.about');
console.log(aboutLi);

// 3. data-name이 contact인 li 태그 요소
const contact = nav.querySelector('li[data-name="contact"]');
// const contact = document.querySelector('concat');
console.log(contact);

// 4. nav 요소 안에 있는 모든 자식 요소
const children = nav.querySelectorAll('*');
const _children = nav.children[0].children;
console.log(children);
console.log(_children);

const li = [...children].find((li) => {
  return li.matches('.about');
  // hasAttribute는 class Name까지는 확인이 불가하다.
});
console.log(li);

/* 문서 대상 확인 */
// - matches
// - contains

/**
 * 상태 변수 관리 -> 어려우면 빼라
 */
