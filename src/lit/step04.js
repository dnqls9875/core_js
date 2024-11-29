import { LitElement, html } from "lit";

class NameTage extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();

    this.name = "너의 이름은 뭐니?";
  }

  handleInput(e) {
    this.name = e.target.value;
    console.log(this.name);
  }

  handleButton() {
    alert(this.name);
  }

  // & @input, click은 addEventListener input 같은 것 = 선언형 이벤트 입력
  render() {
    return html/* html */ `
      <p>안녕. ${this.name}</p>
      <input @input=${this.handleInput} type="text" placeholder="이름을 입력해주세요" />
      <button @click=${this.handleButton} type="button">Click me</button>
    `;
  }
}

customElements.define("name-tag", NameTage);
app.append(document.createElement("name-tag"));
