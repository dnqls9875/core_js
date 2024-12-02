/* Object Type */

const user: {
  id?: number; // optional Property // 작성하지 않아도 오류가 나지 않는다.
  name: string;
  age: number;
} = {
  // id: 1,
  name: "tiger",
  age: 30,
};

user.id = 10;
// user.address = "a";

const config: {
  readonly apiKey: string; // 읽기 전용
} = {
  apiKey: crypto.randomUUID(),
};

// config.apiKey = "aadfdaf"; // ! 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
