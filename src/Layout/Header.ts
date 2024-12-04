import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "./resetCSS";

@customElement("c-header")
class Header extends LitElement {
  static styles: CSSResultGroup = [
    resetCSS,
    css`
      header {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        color: black;
        padding: 1rem;
      }
      .logo {
        a {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
      }
      nav {
        display: flex;
        align-items: center;
        ul {
          display: flex;
          gap: 1rem;
        }
      }
    `,
  ];
  // static get styles = []

  render() {
    return html`
      <header>
        <h1 class="logo">
          <a href="/"
            ><img style="width:30px" src="/logo.png" alt="" />
            <span>쇼핑은 역시 범Card몰</span>
          </a>
        </h1>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Product</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
