/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

console.log(href); // 전체주소가 나온다.
/**
 * location.href 값을 가져오는 객체
 * location.href = "주소"
 */

// href : http://localhost:5500/index.html?type=listing&page=2#title
// protocol : http:
// host : localhost:5500
// port : 5500
// search : ?type=listing&page=2 -> 다른말로 params ?는 query문 검색을 했을 때 데이터가 백엔드로 넘어가는 데이터
// hash : #title -> a태그로 해시값 입력 a태그가 없다면 location.hash = 'next'추가 할수도 있다.

console.log(protocol);
/**
 * http: vs https:
 * 통신을 할때 https를 사용해야 보안이 더 좋다.
 */

// console.log(host);
// console.log(port);
// console.log(search);
// console.log(hash);

const urlParams = new URLSearchParams(location.search);
/**
 * URLSearchParams
 * iterator Symbol
 * 새로운 객체를 만들어냄
 * 유사 배열
 */

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }

console.log(urlParams.get('type')); // type을 가져온다.

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

// callback => Promise

// function getGeolocation(success){

//   navigator.geolocation.getCurrentPosition((data)=>{
//     const {latitude:lat, longitude:long} = data.coords;
//     success({ lat, long })

//   })

// }

// const geo = getGeolocation(({lat,long})=>{
//   console.log( lat,long );

// });

// Promise
function getGeolocation(success) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude: lat, longitude: long } = data.coords;
      resolve({ lat, long });
    });
  });
}

// getGeolocation().then((data) => {
//   console.log(data);
// });

//  async await
const geo = getGeolocation();
console.log(geo.lat, geo.long);

// navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
//   console.log(stream);
//   document.querySelector('#videoElement').srcObject = stream;
// });

// 첫번째 매개변수 콜백은 성공, 두번째 매개변수 콜백은 실패를 담는다.

/**
 * getCurrentPosition() 그냥 호출하면 오류
 */

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// height, width를 계산할 때 브라우저의 크기를 계산해야함 : innerWidth, innerHeigth

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;

// 원하는 위치로 이동할 수 있다. history.back, forward, go

// pushState => spa에서 많이 사용됨

// spa
// Single
// Page
// Application
// 검색엔진의 수집이 잘 되지 않는다.

// SSG
