class Componets extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["count"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      // ...
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div>hello WC</div>
    `;
  }
}

customElements.define("c-element", Componets);
