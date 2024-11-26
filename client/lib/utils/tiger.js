const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);
  // console.log(response); // response 객체를 열어보면 ok라는 메서드가 있다.

  if (response.ok) {
    response.data = await response.json(); // response 객체에 data 키하나 추가한거임
    // ? 이 아래의 역할을
    // ? .json() 이녀석이 해준다.

    // class Respnse{
    //   async json(data) {
    //     return JSON.parse(data)
    //   }
    // }
  }

  return response;
};

//  method,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: '우빈', age: 30 }), // 데이터 body 에 그냥 객체를 실어보내면 안되고 문자화를 한 객체를 실어 보내야 한다.

tiger({
  url: END_POINT,
});

// const response = await tiger({ url: END_POINT });

tiger.get = (url, options) => {
  // 나 자신을 전달하는데 객체로 전달한다.
  return tiger({
    url,
    ...options,
  });
};
tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};
tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};
tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

// const response = await tiger.get(END_POINT);
// console.log(response.data);

const resSecond = await tiger.post(END_POINT, { name: 'tiger' });

function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude: lat, longitude: long } = data.coords;
      resolve({ lat, long });
    });
  });
}

// const data = await getGeolocation();
