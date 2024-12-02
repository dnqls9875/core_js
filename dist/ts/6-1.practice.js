let un;
if (typeof un === "number") {
    un.toFixed();
}
else if (typeof un === "string") {
    un.toUpperCase();
}
else if (un instanceof Date) {
    un.getTime();
}
else if (un instanceof HTMLElement) {
    un.nextElementSibling;
}
export {};
// 너가 000의 인스턴스가 맞아?
// instanceof
// 객체 instanceof 생성자
// 객체: 확인하려는 대상 객체
// 생성자: 검사하려는 클래스(또는 생성자 함수)
