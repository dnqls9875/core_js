const URL = 'https://pokeapi.co/api/v2/pokemon/172';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
  },
};

const getData = async (options) => {
  const config = { ...defaultOptions, ...options, ...defaultOptions.headers, ...options.headers };
  const { url, ...rest } = options;

  console.log(config);

  // await은 가져온 코드의 실행의 흐름을 제어한다.
  // 여기서 데이터가 다 떨어져야 return response가 실행된다.
  // fetch를 사용하면 promise 객체가 반환한다.
  // result는 response 객체다.
  const response = await fetch(url, rest);

  // .json() => Promise 객체가 리턴된다. -> result Object
  const data = await response.json();
  console.log(data);

  // request 요청
  // response(서버에서 응답된 데이터)
  // 접근하려면 await

  // url만 인자로 내보내면 기본이 get통신이다.
  // fetch는 promise 객체를 반환한다.
  // fetch(url, options(객체));

  return response;
};

const monster = await getData({
  url: URL,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log(monster);

// monster.then((res) => {
//   console.log(res);
// });

// const data = await monster;
// console.log(data);

/**
 * async 는 무.조.건 promise 이행된 (성공이든 실패든) 객체를 반환한다.
 * awiat 는 result를 꺼낼 수 있음 피카츄 then 줄줄 쓰지 않아도 된다. / 코드의 실행흐름을 제어할 수 있다.
 */

// 로컬 스토리지 사용하는 이유?
// - 데이터 저장하려고 근데 왜 localStorage 사용? 성능 문제 때문에 자그마한 통신들은 사용자 컴퓨터에 저장하자.

// 쿠키
