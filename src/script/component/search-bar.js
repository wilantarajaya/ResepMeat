class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
      <style>
      .search-menu {
        margin: 0 auto;
        width: 30%;
        margin-bottom: 15px;
        min-width: 300px;
    }
    .search-menu button{
      background-color: #FDA65D;
    }
    
    .search-menu h4 {
        text-align: center;
    }

      </style>
      <section id="search-menu" class="search-menu">
        <h4>Cari Makanan</h4>
              <div class="input-group justify-content-center">
                <input type="search" class="form-control rounded input-src" placeholder="Cari Makanan" aria-label="Search" aria-describedby="search-addon"  id="searchElement" autocomplete="off"/>
                <button type="submit" class="btn"  id="searchButtonElement">Cari</button>
              </div>
    </section>
    `;
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
