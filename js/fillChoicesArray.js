import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
export function fillChoicesArray(recipeArray, choicesArray, activeSortings) {
  console.log(choicesArray.ingredients);
  console.log(activeSortings.ingredients);
  recipeArray.forEach((recipe) => {
    if (recipe.ingredients) {
      recipe.ingredients.forEach((element) => {
        console.log(element);
        if (
          !activeSortings.ingredients.includes(element.ingredient.toLowerCase())
        ) {
          choicesArray.ingredients.push(
            capitalizeFirstLetter(element.ingredient)
          );
        }
      });
    }

    if (recipe.ustensils) {
      recipe.ustensils.forEach((ustensil) => {
        if (!activeSortings.ustensils.includes(ustensil.toLowerCase())) {
          choicesArray.ustensils.push(capitalizeFirstLetter(ustensil));
        }
      });
    }

    if (recipe.appliance) {
      if (!activeSortings.appliances.includes(recipe.appliance.toLowerCase())) {
        choicesArray.appliances.push(capitalizeFirstLetter(recipe.appliance));
      }
    }
  });
}
