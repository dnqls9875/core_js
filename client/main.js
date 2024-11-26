import { Button } from './components/Button/Button.js';

const app = document.getElementById('app');

function defineElement() {
  customElements.define('custom-button', Button);
}

defineElement();

const buttonElement = document.createElement('custom-button');

app.append(buttonElement);
