const END_POINT = 'https://jsonplaceholder.typicode.com/users/2';

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete

// 이렇게 작성하면 open왜 에러가 나냐면 어디랑 통신할건지 작성하지 않아서 그런다.
// console.log(xhr.response); // ? 빈 문자

// 객체 구조 분해 할당
function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url); // '통신 방식' , 주소(변수로 담아도 된다.) // 0.4s

  // 우리는 json파일을 보낸거야 라는 사용 설명서를 setRequestHeader => Header에 실어 보낸다.

  // 객체와 key, value를 분리 (Object.entries)
  // 반복문 (forEach)

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  // xhr.setRequestHeader(key,value);

  xhr.addEventListener('readystatechange', () => {
    // response 는 데이터가 담겨있는곳
    const { status, response, readyState } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);
        success(data);
      } else {
        fail({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }
  });

  // 데이터를 보낼 때는 문자형 데이터로 보내야 한다. 그래서
  // JSON.stringify(body) 이렇게 보내야함.
  // 근데 이건 생 텍스트를 보낸 것과 같음
  xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'tiger',
  age: 38,
};

// 콜백으로 전달하는 매개변수가 많아지면 객체로 전달하는게 낫다.
// xhr({
//   method: 'DELETE',
//   url: END_POINT,
//   success: (data) => {
//     console.log(data);
//   },
//   fail: () => {},
// });

xhr.get = (url, success, fail) => {
  xhr({ url, success, fail });
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail,
  });
};

xhr.put = (url, body, success, fail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    success,
    fail,
  });
};
xhr.delete = (url, success, fail) => {
  xhr({
    method: 'DELETE',
    url,
    success,
    fail,
  });
};

// xhr.get(
//   END_POINT,
//   (data)=>{
//     console.log( data );
//   }
// )
