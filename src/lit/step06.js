import { LitElement, html } from "lit";

class TodoList extends LitElement {
  static properties = {
    _listItem: { state: true }, //  _을 앞에다 작명하면 내부적으로만 사용하겠다는 암묵적의미 // 객체안에 state:true 은 명시적의미
  };

  constructor() {
    super();

    // 리스트 랜더링을 할때는 배열을 만들어주면 랜더링이 된다.
    this._listItem = [
      { text: "독서하기", completed: true },
      { text: "영화보기", completed: false },
    ];
  }

  // 작명 나름
  get input() {
    return this.renderRoot.querySelector(".newItem") ?? null;
  }

  addTodoItem() {
    this._listItem = [...this._listItem, { text: this.input.value, completed: false }];

    this.input.value = "";
  }

  render() {
    return html/* html */ `
      <h2>To Do List</h2>
      <ul>
        ${this._listItem.map(({ text }) => html`<li>${text}</li>`)}
      </ul>
      <label id="newItem">
        <input class="newItem" type="text" id="newItem" aria-lable="새로운 아이템" />
      </label>
      <button type="button" @click=${this.addTodoItem}>추가</button>
    `;
  }
}

customElements.define("todo-list", TodoList);
app.append(document.createElement("todo-list"));
