/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = [1, 2, 3, 4, 5, 6];
console.log(String(YEAR)); // 1,2,3,4,5,6  Array.toString()과 같다.

const YEAR2 = 2024;
console.log(String(YEAR2));
console.log(YEAR2 + '');

// undefined, null
let days = null;
console.log(days + '');

let undef = undefined;
console.log(undef + '');

// boolean
let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); // NaN

// null
let money = null;
console.log(money * 1); // +money , money / 1 , money * 1 -> 0

// boolean
let isActive = true; // []:0 [1,2,3]: NaN / {} : NaN / ()=>{} : NaN
console.log(+isActive); // 1

// string
let num = '100';
console.log(+num); // 100
console.log(num / 1); // 100
console.log(num * 1); // 100

// numeric string

const width = '120.5px';
console.log(+width); // NaN 이유는 문자와 숫자를 병합하면 숫자가 아니라고 나온다.
console.log(parseInt(width)); // 120.5에서 뒤에를 절삭 120
console.log(parseFloat(width)); // 소수점까지 120.5

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(' ')); // true
console.log(Boolean('0')); // true
console.log(!!'0'); // true
console.log(!!{}); // true
console.log(!![]); // true
console.log(Boolean(() => {})); // true

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
