// const str = 'aa'
// const str = new String('aa')
const data = {
  method: 'GET',
};

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

function xhr(options) {
  const { method, url } = { ...data, ...options };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          const data = JSON.parse(xhr.response);
          resolve(data);
        } else {
          reject('실패');
        }
      }
    });
  });
}

xhr({
  method: 'GET',
  url: END_POINT,
}).then((result) => {
  // console.log( result );
});

const p = new Promise((resolve, reject) => {
  if (false) {
    resolve('오예!');
  } else {
    reject('오예!'); // 에러 터짐
  }
});

p.then((res) => {
  console.log(res);
})
  .then(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    }
  )
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const defaultOptions = {
  timeout: 1000,
  data: '더미 데이터',
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, config.timeout);
  });
}

delayP().then((res) => {
  console.log(res);
});
