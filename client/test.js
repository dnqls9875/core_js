// const defaultOptions = {
//   method: 'GET',
//   body: null,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// };

// async function getData(options) {
//   const { url, ...rest } = {
//     ...defaultOptions,
//     ...options,
//     headers: {
//       ...defaultOptions.headers,
//       ...options.headers,
//     },
//   };

//   const response = await fetch(url, rest);

//   const data = await response.json();

//   document.body.insertAdjacentHTML(
//     'beforeend',
//     `
//     <div class="pokemon">
//       <h2>${data.name}</h2>
//       <img src="${data.sprites.front_default}" alt="${data.name}" />
//     </div>
//   `
//   );

//   console.log(data);

//   return data;
// }

// const monster = await getData({
//   url: 'https://pokeapi.co/api/v2/pokemon/9',
// });

class MyElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      .hello{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
    
    <div class="hello" data-name="유저 정보">
      <h2>이우빈</h2>
      <p>1995</p>
      <p>남자</p>
    </div>
    `;
  }

  static get observedAttributes() {
    return ['data-name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }
}

customElements.define('my-element', MyElement);
