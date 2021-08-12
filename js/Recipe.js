export class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  getTemplate() {
    let ingredientTemplate = "";
    this.ingredients.forEach((ingredient) => {
      if (ingredient.unit) {
        ingredientTemplate += `
        <div class="recipe-ingredient">${ingredient.ingredient}:${ingredient.quantity}${ingredient.unit}</div>
      `;
      } else if (!ingredient.unit && ingredient.quantity) {
        ingredientTemplate += `
        <div class="recipe-ingredient">${ingredient.ingredient}:${ingredient.quantity}</div>
      `;
      } else {
        ingredientTemplate += `
        <div class="recipe-ingredient">${ingredient.ingredient}</div>
      `;
      }
    });
    return `<div class="recipe">
            <div class="recipe-image">

            </div>
            <div class="recipe-content">
              <h1 class="recipe-heading">${this.name}</h1>
              <span class="recipe-duration">${this.time} min</span>
              <div class="recipe-ingredients">
                ${ingredientTemplate}
              </div>
              <div class="recipe-description">
                ${this.description}
              </div>
            </div>
          </div>
    `;
  }
}
