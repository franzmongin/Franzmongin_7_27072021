export function fillChoicesArray(recipeArray, choicesArray) {
  let recipeListHtml = "";
  recipeArray.forEach((recipe) => {
    recipeListHtml += recipe.getTemplate();
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
  return recipeListHtml;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
