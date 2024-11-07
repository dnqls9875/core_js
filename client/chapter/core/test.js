// pow(numeric: number, powerCount: number): number;

function calculateTotal() {
  let total = 0;
  // const arr = Array.from(arguments);
  const arr = [...arguments];
  return arr.reduce((acc, cur) => acc + cur);

  // arr.forEach((price) => {
  //   return (total += price);
  // });

  // for (const value of arguments) {
  //   total += value;
  // }
  // console.log(total);

  // ! 강제 부모 배열로 변경
  // arguments.__proto__ = Array.prototype;
  // return arguments.reduce((acc, cur) => acc + cur);
}

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);
console.log(result);
