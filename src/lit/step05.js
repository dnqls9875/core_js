import { LitElement, html } from "lit";

class NameTage extends LitElement {
  static properties = {
    checked: {},
    value: {},
  };

  constructor() {
    super();

    this.checked = false;
    this.value = "hello";
  }

  setChecked(e) {
    this.checked = e.target.checked;
    console.log(this.checked);
  }

  // ? .value=${진짜 불린값이 들어간다. true, false}  value="문자로 밖에 안들어간다 'true' , 'false' "
  render() {
    return html/* html */ `
      <div>
        <input type="text" .value=${this.value} ?disabled=${this.checked} />
      </div>
      <label id="checkbox">
        <input type="checkbox" name="" id="checkbox" @change=${this.setChecked} />
      </label>
    `;
  }
}

customElements.define("name-tag", NameTage);
app.append(document.createElement("name-tag"));
