class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        nav {
          background-color: #E26A2C;
          font-family:'Lobster', cursive;
      }
         
      
      nav .navbar-brand {
          color: white;
          font-size: 2.5rem;
          margin-left: 5%;
          text-decoration: none;
      }
        </style>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand">ResepMeat</a>
            </div>
          </nav>`;
  }
}

customElements.define('app-bar', AppBar);
