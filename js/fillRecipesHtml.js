export function fillRecipesHtml(recipeArray) {
  let recipeListHtml = "";
  recipeArray.forEach((recipe) => {
    recipeListHtml += recipe.getTemplate();
  });
  document.querySelector(".recipes-list").innerHTML = recipeListHtml;
}
