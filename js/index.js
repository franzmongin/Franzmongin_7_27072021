import recipes from "../data/recipe.js";
import { chargeChoicesTemplate } from "./chargeChoicesTemplate.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { Recipe } from "./Recipe.js";
import { onClickSortingTag } from "./onClickSortingTag.js";
import { onClickRemoveOrding } from "./onClickRemoveOrding.js";
import { onChangeOrderInput } from "./onChangeOrderInput.js";
import { onSearchBarEvent } from "./onSearchBarEvent.js";

window.orderedRecipes = [];
window.addEventListener("DOMContentLoaded", (event) => {
  // event to open differente choices lists
  document.querySelectorAll(".choices-selection").forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("opened-list");
      element.querySelector(".choices-list").classList.toggle("show-list");
      element.querySelector(".select-arrow").classList.toggle("bottom-arrow");
    });
  });
  //---

  // list of recipes
  let recipeArray = [];
  //---

  // list of sorting choices
  let choicesArray = {
    ingredients: [],
    appliances: [],
    ustensils: [],
  };
  //---

  // list of actives sorting tags
  let activeSortings = {
    ingredients: [],
    appliances: [],
    ustensils: [],
  };
  //---
  // create recipes objects
  recipes.forEach((recipe) => {
    recipeArray.push(new Recipe(recipe));
    orderedRecipes.push(new Recipe(recipe));
  });
  //---

  // fill Choices Array
  fillChoicesArray(recipeArray, choicesArray, activeSortings);
  // list of sorting choices used to store after being order (search or used tag)
  let orderedArray = JSON.parse(JSON.stringify(choicesArray));
  //---

  //---

  // fill recipes list with recipeHtml
  fillRecipesHtml(recipeArray);

  //---

  // suppression des doublons dans les tableaux d'ingrédients d'appareils et d'ustensiles
  removeDuplicateInChoices(choicesArray);
  //---

  // charge choices template
  chargeChoicesTemplate("ingredients", choicesArray);
  chargeChoicesTemplate("ustensils", choicesArray);
  chargeChoicesTemplate("appliances", choicesArray);
  //---

  // onChange orders input event
  onChangeOrderInput(orderedArray, activeSortings, recipeArray);
  //---

  // on click on sorting tag
  onClickSortingTag(orderedArray, activeSortings, recipeArray);
  //---

  // on click active tag to remove it
  //---

  //
  onSearchBarEvent(orderedArray, activeSortings, recipeArray);
});
