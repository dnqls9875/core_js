// eunmable type
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
Direction.UP; // 0
function move(direction) {
    switch (direction) {
        case Direction.UP:
            console.log("안녕 나 위");
            break;
        case Direction.DOWN:
            console.log("안녕 나 아래");
            break;
        case Direction.LEFT:
            console.log("안녕 나 좌측");
            break;
        case Direction.RIGHT:
            console.log("안녕 나 우측");
        default:
            console.log("기본값");
            break;
    }
}
console.log(move(Direction.UP)); // 안녕 나 위 출력
const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    left: Direction.LEFT,
    right: Direction.RIGHT,
};
var End_point;
(function (End_point) {
    End_point["USER"] = "user.com/user";
    End_point["MONSTER"] = "monster.com/monster";
    End_point["IMAGE"] = "randomImage.com/200-200";
})(End_point || (End_point = {}));
const END_POINT = {
    user: End_point.IMAGE,
};
export {};
