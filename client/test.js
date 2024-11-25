const URL = 'https://pokeapi.co/api/v2/pokemon/172';

async function getData() {
  const response = await fetch(URL, {
    method: 'POST',
    body: null,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  console.log(data);

  return response;
}

const monster = await getData();
// promise 객체 반환 앞에 awiat으로 결과값 받아올 수 있다.
// await 사용하자마자 Response 객체를 반환
console.log(monster);
