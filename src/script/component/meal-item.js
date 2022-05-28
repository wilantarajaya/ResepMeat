class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .card{
      width: 18rem;
      height: 90%;
      margin: 30px;
    }
    .card h5{
      text-align: center;
    }

    .card .btn-meat button{
      background-color: #FFD07F; 
      border-radius: 25px; 
      text-align: center;
      margin-top: 20px;
      width: 200px;
      height:50px;
      border: none;
    }

    .card {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    </style>
      <div class="card">
        <img src="${this._meal.strMealThumb}" class="card-img-top" alt="${this._meal.strMeal}">
        <div class="card-body">
          <h5 class="card-title">${this._meal.strMeal}</h5>
          <h6>Kategori : ${this._meal.strCategory}</h6>
          <h6>Asal : ${this._meal.strArea}</h6>
          <div class="col text-center btn-meat">
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#tes${this._meal.idMeal}">
              Cara Memasak
            </button>
          </div>
          <div class="modal fade" id="tes${this._meal.idMeal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Cara Memasak</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>${this._meal.strInstructions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('meal-item', MealItem);
