/* Object Type */
const user = {
    // id: 1,
    name: "tiger",
    age: 30,
};
user.id = 10;
// user.address = "a";
const config = {
    apiKey: crypto.randomUUID(),
};
export {};
// config.apiKey = "aadfdaf"; // ! 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
