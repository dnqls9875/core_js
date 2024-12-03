/* alias type */
// 타입 별칭은 앞문자를 대문자로
// alias는 필수다 코드양을 줄여주기 위해서 마치 변수를 지정해놓고 가져다 쓰는 모습
// interface _User {
//   address: string;
// }
// % 차이점은 = 이 있고, = 이 없다.
const user1 = {
    id: 1,
    name: "tiger",
    auth: "admin",
    isPaid: true,
};
const user2 = {
    id: 1,
    name: "tiger",
    auth: "admin",
    isPaid: true,
};
const user3 = {
    id: 1,
    name: "tiger",
    auth: "admin",
    isPaid: true,
};
const person = {
    name: "beom",
    age: 30,
    email: "tiger@naver.com",
    address: "경기도 양주시",
    phone: "010-2032-1232",
};
export {};
