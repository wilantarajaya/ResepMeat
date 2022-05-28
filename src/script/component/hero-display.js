import './search-bar.js';
// import img from 'image/hero.svg'

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .hero {
            width: 100%;
            background-color: #FDA65D;
            font-family:'Lobster', cursive;
        }
           
        .hero .row {
        padding-bottom: 30%;
        }
        .hero img {
            width: 70%;
            margin-top: 40%;
        }
        
        .hero .row h1{
            margin-top: 30%;
            font-size: 3rem;
            text-align: center;
        }
        .hero .row h3{
            text-align: center;
            font-size: 1.5rem;
        }
        
        .hero a {
            padding-top: 10px;
            color: #483434;
        }

        .hero .btn {
            background-color: #FFD07F; 
            border-radius: 25px; 
            text-align: center;
            margin-top: 20px;
            width: 200px;
            height:50px;
            border: none;
        }
      
        </style>
        <section id="hero" class="hero">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg">
                  <div class="text-center">
                    <img src="image/hero.svg" alt="shape">
                  </div>
                </div>
                <div class="col-lg">
                    <h1>Resep Meat</h1>
                    <h3>Aneka Resep Makanan Seluruh Dunia</h3>
                    <div class="d-grid d-md-flex justify-content-center">
                        <a href="#search-menu" class="btn">Cari Makanan</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
  }
}

customElements.define('hero-display', Hero);
