import { LitElement, html } from "lit";

import s from "/src/lit/shop.css?inline";

const data = [
  { id: 1, product: "소고기 샤브샤브 밀키트", price: 15900, quantity: 3 },
  { id: 2, product: "비빔밥 세트", price: 11900, quantity: 5 },
  { id: 3, product: "차돌박이 숙주 볶음", price: 10320, quantity: 2 },
];

class Product extends LitElement {
  static properties = {
    _productItems: {},
  };

  constructor() {
    super();

    this._productItems = [...data];
  }

  render() {
    return html/* html */ `
      <style>
        ${s}
      </style>
      <div class="container">
        <ul class="list">
          ${this._productItems.map(
            (item) =>
              html`
                <li .id=${item.id}>
                  <figure>
                    <img src="https://picsum.photos/100/100" alt="" />
                  </figure>
                  <div class="detail">
                    <span>${item.product}</span>
                    <span>${item.price} 원</span>
                    <span>${item.quantity} 개</span>
                  </div>
                  <button type="button" class="deleteBtn">삭제</button>
                </li>
              `
          )}
        </ul>
        <form class="regiseter">
          <div>상품명 : <input id="product" type="text" /></div>
          <div>가격 : <input id="price" type="text" /></div>
          <div>수량 : <input id="quantity" type="text" /></div>
          <button type="submit" class="add">추가</button>
        </form>
      </div>
    `;
  }
}

customElements.define("c-product", Product);
