const { localStorage: storage } = window;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ mesage: 'setStorage 함수의 첫 번재 인수는 문자 타입이여야 합니다.' });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ mesage: 'getStorage 함수의 첫 번재 인수는 문자 타입이여야 합니다.' });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

export function setCookieValue(name, value, days, path = '/') {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=${path}`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // days를 밀리세컨즈
    cookieString += `; expires=${date.toUTCString()}`;
  }

  document.cookie = cookieString;
}

export function getCookieValue(name) {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${encodeURIComponent(name)}=`);

  console.log(parts);

  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(';').shift());
  }
  return null;
}
