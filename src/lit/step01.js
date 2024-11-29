import { LitElement, html } from "lit";

class MyElement extends LitElement {
  static properties = {
    version: {}, // 객체여야 한다.
  };

  constructor() {
    super();

    this.version = "1.0.0"; // 여기에 객체 값을 입력
  }

  render() {
    return html` <div>${this.version}</div> `; //  render 에 입력
  }
}

customElements.define("my-element", MyElement);

app.append(document.createElement("my-element"));
