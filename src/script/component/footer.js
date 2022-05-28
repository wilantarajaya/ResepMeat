class FooterBar extends HTMLElement {
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
        footer {
            background-color: #E26A2C;
            margin-top: 20px;
            padding: 15px 0px;
            font-family:'Lobster', cursive;
            font-size: 1.5rem;
            color:white;
            text-align: center;
        }
    </style>
    <footer class=" text-center text-lg-start">
        <div class="text-center p-3 text">
        Wilantara Jaya © 2021 
        </div>
    </footer>
    `;
  }
}

customElements.define('footer-cos', FooterBar);
