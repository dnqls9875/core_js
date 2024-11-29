import s from "/src/tailwind.css?inline"; // 웹 컴포넌트를 vite 환경에서 사용하고 싶다면 css import 구문을 위에서 사용해야 한다.

// css text import

export class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = ` 
    <!-- <style>@import url('/src/Layout/Header/Header.css');</style> --> 
    <style>${s}</style>
    <header class="flex justify-between p-6 bg-slate-300">
      <h1 class="logo font-bold">
        <a href="/">🐯HOLA</a>
      </h1>
      <nav>
        <ul class="flex gap-5">
          <li><a href="/">HOME</a></li>
          <li><a href="/">PRODUCT</a></li>
          <li><a href="/">CONTACT</a></li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define("c-header", Header);
