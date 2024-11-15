function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node);
  node.addEventListener(type, handler);

  // & 클로저
  // & 함수 안에 함수로 사용하는데 그 중첩함수에서 상위 함수의 인자를 전달 받는다.
  return function () {
    node.removeEventListener(type, handler);
  };
  // return () => node.removeEventListener(type, handler);
}
