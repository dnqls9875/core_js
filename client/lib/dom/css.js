/* global syntaxError */

/* -------------------------------------------------------------------------- */
/*                                     css style                                */
/* -------------------------------------------------------------------------- */

// JSDoc

/**
 * @function DOM Element에 클래스를 추가하는 함수
 * @param {HTMLElement | string} node
 * @param  {string | array | object} className
 * @return {void}
 */

function addClass(node, ...className) {
  if (isString(node)) node = getNode(node);

  className.forEach((c) => {
    if (isObject(c)) c = Object.values(c);

    if (c.includes(',')) {
      c = c.replace(/\s*/g, '').split(',');
    }

    if (isArray(c)) {
      c.forEach((c) => node.classList.add(c));
    } else {
      node.classList.add(c);
    }
  });
}

function removeClass(node, className) {
  if (isString(node)) node = getNode(node);
  if (!className) {
    node.className = '';
  }
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}

/* -------------------------------------------------------------------------- */
/*                                    style                                   */
/* -------------------------------------------------------------------------- */

// getCss
function getCss(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (!(prop in document.body.style)) {
    throw syntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성 이여야 합니다.');
  }
  return getComputedStyle(node)[prop];
}

// setCss
function setCss(node, prop, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (!(prop in document.body.style)) {
    throw syntaxError('setCss 함수의 두 번째 인수는 유효한 css 속성 이여야 합니다.');
  }
  if (!(prop in document.body.style)) {
    throw syntaxError('setCss 함수의 세 번째 인수는 필수 입력값입니다.');
  }
  return (node.style[prop] = value);
}

// // css 관심사의 분리
const css = (node, prop, value) => (!value ? getCss(node, prop) : setCss(node, prop, value));
