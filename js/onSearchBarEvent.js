import { onClickSortingTag } from "./onClickSortingTag.js";
import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { chargeChoicesTemplate } from "./chargeChoicesTemplate.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { onChangeOrderInput } from "./onChangeOrderInput.js";
import { orderRecipesWithActiveTagsAndSearchValue } from "./orderRecipesWithActiveTagsAndSearchValue.js";

export function onSearchBarEvent(orderedArray, activeSortings, recipeArray) {
  document
    .querySelector(".search-input")
    .addEventListener("keyup", (e) => searchBarHandler(e));

  function searchBarHandler(e) {
    let value = e.currentTarget.value;
    orderedRecipes = orderRecipesWithActiveTagsAndSearchValue(
      activeSortings,
      recipeArray,
      value
    );
    console.log(orderedRecipes);
    fillRecipesHtml(orderedRecipes);
    orderedArray = {
      ingredients: [],
      appliances: [],
      ustensils: [],
    };
    fillChoicesArray(orderedRecipes, orderedArray, activeSortings);
    removeDuplicateInChoices(orderedArray);
    chargeChoicesTemplate("ustensils", orderedArray);
    chargeChoicesTemplate("appliances", orderedArray);
    chargeChoicesTemplate("ingredients", orderedArray);
    onChangeOrderInput(orderedArray, activeSortings, recipeArray);
    onClickSortingTag(orderedArray, activeSortings, recipeArray);
  }
}
