type Person = {
  name: string;
  age: number;
  // [key: string]: string | number;
};

const person: Person = {
  name: "tiger",
  age: 35,
};

// % Person의 keyof 키만 다 뽑아서 Person에 key에게 전달해주겠다,
function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

getProperty(person, "name"); //  'tiger'

function vaildCssProperty<T extends keyof CSSStyleDeclaration>(prop: T): boolean {
  return prop in document.body.style;
}

vaildCssProperty("color"); // true

const product = {
  id: 1,
  name: "mac-book",
  price: 300,
};

function setProperty<T, K extends keyof T>(product: T, key: K, value: T[K]) {
  product[key] = value;
  return product;
}

setProperty(product, "price", 100); // {id: 1, name:'mac-book', price:100}

const products = [
  { name: "mac", price: 500 },
  { name: "iPhone", price: 300 },
  { name: "iPad", price: 200 },
];

// function getProperties<T, K extends keyof T>(arr: T[], key: K): T[K][] {
//   return arr.map((item) => item[key]);
// }

function getProperties<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((product) => product[key]);
}

getProperties(products, "name"); // ['mac', 'iPhone', 'iPad']
