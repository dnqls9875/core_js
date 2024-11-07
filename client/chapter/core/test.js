// pow(numeric: number, powerCount: number): number;

let pow = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(numeric)
    .reduce((acc, cur) => {
      return acc * cur;
    });
};

const result = pow(2, 53);
console.log(result);

let repeat = (text, count) => {
  return Array(count)
    .fill(text)
    .reduce((acc, cur) => acc + cur, '');
};

const repeatResult = repeat('배고파🍛', 3);

console.log(repeatResult);
