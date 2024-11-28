import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplete = document.createElement('template');

todoTemplete.innerHTML = `
<style>@import url(./components/TodoList/TodoList.css);</style>
  <div class="container">
    <h1>TO DO TodoList
      <img src="../assets/checklist.png" alt="체크리스트">
    </h1>
     <ul class="todo">

     </ul>
      <button type="button" class="add-item">+</button>
  </div>
`;

export class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    const tl = gsap.timeline();

    tl.from(this.container.children[0], { opacity: 0, y: 30 });
    tl.from(this.container.children[1], { height: 0, clearProps: 'all' });
    tl.from(this.container.children[2], { opacity: 0, marginTop: 40 });

    this.addButton.addEventListener('click', this.handleClick.bind(this));
    const data = JSON.parse(localStorage.getItem('todo'));

    data.forEach(({ id, value, checked }) => {
      const todoItem = new TodoItem(id, value, checked);
      this.todo.append(todoItem);
    });
  }

  handleClick() {
    const todoItem = new TodoItem(Date.now(), '', false);
    // const tag = document.createElement('custom-todo-item');
    // tag.textContent = 'list';
    this.todo.append(todoItem);
  }

  render() {
    this.shadowRoot.append(todoTemplete.content.cloneNode(true)); // 복제
  }
}
