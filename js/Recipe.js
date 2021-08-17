export class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance.toLowerCase();
    this.ustensils = data.ustensils.map((e) => e.toLowerCase());
  }

  getTemplate() {
    let ingredientTemplate = "";
    this.ingredients.forEach((ingredient) => {
      if (ingredient.unit) {
        ingredientTemplate += `
        <div class="recipe-ingredient"><b>${ingredient.ingredient}</b>: ${ingredient.quantity}${ingredient.unit}</div>
      `;
      } else if (!ingredient.unit && ingredient.quantity) {
        ingredientTemplate += `
        <div class="recipe-ingredient"><b>${ingredient.ingredient}</b>: ${ingredient.quantity}</div>
      `;
      } else {
        ingredientTemplate += `
        <div class="recipe-ingredient"><b>${ingredient.ingredient}</b></div>
      `;
      }
    });
    let description = this.description;
    if (description.length > 211) {
      description = description.slice(0, 209) + "...";
    }
    return `<div class="recipe">
            <div class="recipe-image">

            </div>
            <div class="recipe-content">
            <div class="heading-and-duration">
              <h1 class="recipe-heading">${this.name}</h1>
              <span class="recipe-duration"><img class="duration-icon" src="./images/icons/clock.svg" alt="">
${this.time} min</span>
</div>
              <div class="recipe-ingredients">
                ${ingredientTemplate}
              </div>
              <div class="recipe-description" title="${this.description}">
                ${description}
              </div>
            </div>
          </div>
    `;
  }
}
