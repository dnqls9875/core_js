// 문제: Days라는 enum을 정의하고 숫자를 1부터 7까지 할당하세요.

// 숫자형 enum 정의
// TS로 JS변수 사용하기

enum Days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

console.log(Days.Sunday); // 1
console.log(Days.Saturday); // 7

// 문제: TrafficLight enum 정의후 switch case를 사용한 비교

enum TrafficLight {
  Red = "Stop!",
  Yellow = "Slow And Stop!",
  Green = "Go!",
}

// 신호등 색상에 따라 동작을 변경하는 함수
function setTrafficLight(light: TrafficLight) {
  switch (light) {
    case TrafficLight.Red:
      console.log("멈춰라 누가 움직여도 된다고 했나.");
      break;
    case TrafficLight.Yellow:
      console.log("줄여라 누가 꼬리 물어도 된다고 했나.");
      break;
    case TrafficLight.Green:
      console.log("너가 움직일 수 있는건 지금뿐.");
  }
}

// 사용 예시
setTrafficLight(TrafficLight.Red); // 멈춰라 누가 움직여도 된다고 했나.
setTrafficLight(TrafficLight.Green); // 너가 움직일 수 있는건 지금뿐.
