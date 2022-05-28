class Wave extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#FDA65D" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,229.3C672,256,768,224,864,213.3C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
    </div>
        `;
  }
}

customElements.define('wave-shape', Wave);
