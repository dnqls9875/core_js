// eunmable type

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

Direction.UP; // 0

function move(direction: Direction) {
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

enum End_point {
  USER = "user.com/user",
  MONSTER = "monster.com/monster",
  IMAGE = "randomImage.com/200-200",
}

const END_POINT = {
  user: End_point.IMAGE,
};
