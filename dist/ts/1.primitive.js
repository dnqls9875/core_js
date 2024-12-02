// number, string, boolean, null, undefined
/* number type */
// % 타입 스크립트는 기본적인 타입들은 우리가 직접 입력하지 않아도
// % 기본적인 타입 추론을 하게 됨.
// % 추론에 맡기는 것도 좋지만 왠만하면 명시적으로 작성하는걸 권장.
// % 라이브러리를 가져다 쓸 때 추론에 맡겨도 된다.
// let num1 = 10; // ? 암시적
let num1 = 10; // & 명시적
let num2 = NaN;
let num3 = -123;
let num4 = 0.1234124;
let num5 = Infinity;
// 타입 스크립트를 쓰면 타입 인텔릭센스를 제공해준다. (장점)
// addEventListener, addjacentHTML
num1.toFixed();
// num1.toUpperCase(); // 오류
/* staring type */
let str1 = "hi"; // '' , "" 둘다 문자
let str2 = `hi${num2}`;
/* boolean type */
let bool1 = true;
let bool2 = false;
/* null type */
let nullA = null;
/* undefined type */
let undef = undefined;
/* literal type (literal : 값) */ // 새로운 것을 생성할 경우 (객체, 함수) 고정해야 하는 값들에 많이 사용된다.
let numA = 10; // 변수에 들어올 수 있는 값이 10이라고 제한을 두는것
// numA = 100; 에러
let strA = "hello";
// strA = "hi"; 에러
let boolA = true;
// boolA: false; 에러
/* unknown type */
let unknown; // 값 할당 안해준다.
/* never type */
let never; // 내보낼 값이 없다. (에러, 무한루프)
/* any type */
// % any 타입은 타입스크립트를 사용하는데 의미가 없는 타입이기 때문에 사용 자제하자.
let any;
export {};
