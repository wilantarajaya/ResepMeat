import './meal-item.js';

class MealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <style>
        h3 {
          color: black;
          margin-bottom: 30px;
        }
    </style>`;
    this.innerHTML += `<h3>${message}</h3>`;
  }

  render() {
    this.innerHTML = '';
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }
}
customElements.define('meal-list', MealList);
