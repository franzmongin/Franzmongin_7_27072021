import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
export function fillChoicesArray(recipeArray, choicesArray) {
  recipeArray.forEach((recipe) => {
    if (recipe.ingredients) {
      recipe.ingredients.forEach((element) => {
        choicesArray.ingredients.push(
          capitalizeFirstLetter(element.ingredient)
        );
      });
    }

    if (recipe.ustensils) {
      recipe.ustensils.forEach((ustensil) => {
        choicesArray.ustensils.push(capitalizeFirstLetter(ustensil));
      });
    }

    if (recipe.appliance) {
      choicesArray.appliances.push(capitalizeFirstLetter(recipe.appliance));
    }
  });
}
