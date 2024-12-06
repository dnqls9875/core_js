const product = {
  title: "애플 제품",
  data: [
    { name: "맥북", price: 400 },
    { name: "아이폰", price: 400 },
    { name: "아이맥", price: 400 },
  ],
};

//  forEach 값을 반환하지 않음
product.data.forEach((element) => {
  console.log(element);
});

//  filter 값을 반환함
console.log(
  product.data.filter((element) => {
    return element.price >= 100;
  })
);

// map
console.log(product.data.map((item) => item));

console.log(product.data.reduce((acc, cur) => acc + cur.price, 0));
