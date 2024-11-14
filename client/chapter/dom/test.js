function setAttr(node, prop, value) {
  if (isString(node) && value) {
    node = getNode(node);
  }
  if (!isString(prop)) {
    throw typeError('setAttr의 두 번째 인수는 문자 타입이여야 합니다.');
  }
  node.setAttribute(prop, value);
  return node;
}

setAttr('.about', 'aria-label', '데이터값');
