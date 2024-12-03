// 문제: Days라는 enum을 정의하고 숫자를 1부터 7까지 할당하세요.
// 숫자형 enum 정의
// TS로 JS변수 사용하기
var Days;
(function (Days) {
    Days[Days["Sunday"] = 1] = "Sunday";
    Days[Days["Monday"] = 2] = "Monday";
    Days[Days["Tuesday"] = 3] = "Tuesday";
    Days[Days["Wednesday"] = 4] = "Wednesday";
    Days[Days["Thursday"] = 5] = "Thursday";
    Days[Days["Friday"] = 6] = "Friday";
    Days[Days["Saturday"] = 7] = "Saturday";
})(Days || (Days = {}));
console.log(Days.Sunday); // 1
console.log(Days.Saturday); // 7
// 문제: TrafficLight enum 정의후 switch case를 사용한 비교
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Stop!";
    TrafficLight["Yellow"] = "Slow And Stop!";
    TrafficLight["Green"] = "Go!";
})(TrafficLight || (TrafficLight = {}));
// 신호등 색상에 따라 동작을 변경하는 함수
function setTrafficLight(light) {
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
export {};
