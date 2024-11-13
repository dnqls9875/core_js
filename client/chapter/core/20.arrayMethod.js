/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
people.forEach((user) => {
  console.log(user.job);
});

// forEach도 콜백함수
function user(user) {
  console.log(user);
}
people.forEach(user);

const span = document.querySelectorAll('span');

// % span 은 forEach가 들어있는 유사배열
// % forEach로 이벤트를 넣으면 좋은 점은 몇번째로 이벤트를 적용하는지 알 수 있다.
// % 하지만 좋은 방법은 아니다. 웹 브라우저는 이벤트를 적용하는거 자체가 굉장히 큰 리소스를 차지한다.
// % 많은 이벤트를 적용한다면 부화가 많이 온다.

// & delegation // 위임 => 이벤트는 위임 방식을 사용하는게 가장 효율적이다. (내 부모한테 이벤트 위임)
// & 부모한테 한번 이벤트를 담고 자식들이 위임받는 방식

span.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    this.style.color = 'red';
    console.log(index);
  });
});

span.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    elem.style.color = 'red';
    console.log(index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse

// 새로운 배열을 만들어 내는 방식이 좋다. 원본을 훼손하는 건 좋지 않다.
const reverse = people.toReversed();
console.log(reverse); // 새로운 배열
console.log(people); // 원본

// splice
// const splice = people.splice(2, 1); // 2번 부터 하나 삭제
const splice = people.toSpliced(2, 1, { name: '우빈' }); // 삭제 한 곳에 추가
// sort

// 연도별 데이터
// 생성된 날짜
// 테이블 올림차순 내림차순
// 주로 백엔드에서 데이터 정렬을 한다.
const arr = [5, 4, 2, 7, 5, 1];

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
const sort = people.sort(compare);

/* 새로운 배열 반환 ------------------------ */
// 새로운 배열을 만들어 내는 방식이 좋다. 원본을 훼손하는 건 좋지 않다.
// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
const newArr = [5, 2, 8, 4, 1, 3];
console.log(newArr.toSorted());

// console.log(toSorted);

// map은 값을 반환해야 한다. 그래야 반환하여 배열에 담긴다.

const map = people.map((user) => {
  return user.job;
});

// people을 나이에서 전부 +2살 해서 새로운 배열에 담아주세요
// map은 return을 꼭해줘야 한다. 새로운 배열을 만들기 위해서
const userAge = people.map((user) => user.age + 2);

const cardTag = people.map((user) => {
  const template = /* html*/ `
  <li class="userCard">
      <div>
        <img src="${user.imgSrc}" alt="${user.imgAlt}" />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => {
  ul.insertAdjacentHTML('beforeend', tag);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 반환값 : 아이템 자체 -> 무조건 하나만 반환(하나만 찾는다.)
// 위에부터 탐색해서 하나만 찾으면 밑에 값들은 반환하지 않음.
const mj = people.find((user) => {
  return user.age > 20;
});
// findIndex

/* 요소 걸러내기 --------------------------- */
// filter => ✨배열을 반환✨
const mz = people.filter((user) => {
  return user.age > 20;
});

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const _arr = '강현/종국/세현/영현';

const stringToArray = _arr.split('/');
const arrayToString = stringToArray.join();

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const _forEach = (f, i) => {
  for (const a of i) {
    f(a); // 반복문을 돌때마다 함수를 실행 a 인수는 아래 console.log(item)에서 받는다.
  }
};

// 첫번째 인수는 화살표 함수 본문이 -> 위의 f 인자로 들어간다.
// 두번째 인수는 products 객체를 담은 배열이 -> 위의 i인자로 들어간다.
// console.log(item)은 위의 for문을 순환한다.
// 콜백함수
_forEach((item) => {
  console.log(item);
}, products);

const _map = (f, i) => {
  const arr = [];
  for (const a of i) {
    arr.push(f(a));
  }
  return arr;
};

const newMap = _map((item) => item.price, products);

const _filter = (f, i) => {
  const arr = [];
  for (const a of i) {
    if (f(a)) {
      arr.push(a);
    }
  }
  return arr;
};

const _products = _filter((item) => item.price < 15000, products);

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc[Symbol.iterator]();
    acc = i.next().value;
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const t = _reduce((acc, cur) => acc + cur.price, products);

const add = (a, b) => a + b;

console.log(
  _reduce(
    add,
    _map(
      (p) => p.price,
      _filter((p) => p.price < 20000, products)
    )
  )
);

// forEach
// filter
// map
// reduce

// 모든 나이의 합을 더해주세요.

const toatl = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard">${cur.age}, ${cur.name}, ${cur.job}</li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template);
