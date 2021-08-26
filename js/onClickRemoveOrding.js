import { orderRecipesWithActiveTagsAndSearchValue } from "./orderRecipesWithActiveTagsAndSearchValue.js";
import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { chargeChoicesTemplate } from "./chargeChoicesTemplate.js";
import { onClickSortingTag } from "./onClickSortingTag.js";
export function onClickRemoveOrding(activeSortings, recipeArray, orderedArray) {
  let searchValue = document.querySelector(".search-input").value;
  document.querySelectorAll(".remove-ording").forEach((button) => {
    button.addEventListener("click", (e) => {
      let parent = e.currentTarget.parentNode;
      let parentType = parent.classList.contains("active-choice-ingredients")
        ? "ingredients"
        : parent.classList.contains("active-choice-appliances")
        ? "appliances"
        : parent.classList.contains("active-choice-ustensils")
        ? "ustensils"
        : null;
      let index = "";
      switch (parentType) {
        case "ingredients":
          index = activeSortings.ingredients.indexOf(
            e.currentTarget.parentNode
              .querySelector(".ording-text")
              .textContent.toLowerCase()
          );
          activeSortings.ingredients.splice(index, 1);
          break;
        case "appliances":
          index = activeSortings.appliances.indexOf(
            e.currentTarget.parentNode
              .querySelector(".ording-text")
              .textContent.toLowerCase()
          );
          activeSortings.appliances.splice(index, 1);
          break;
        case "ustensils":
          index = activeSortings.ustensils.indexOf(
            e.currentTarget.parentNode
              .querySelector(".ording-text")
              .textContent.toLowerCase()
          );
          activeSortings.ustensils.splice(index, 1);
          break;
        default:
          break;
      }
      orderedRecipes = orderRecipesWithActiveTagsAndSearchValue(
        activeSortings,
        recipeArray,
        searchValue
      );
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
      onClickSortingTag(orderedArray, activeSortings, recipeArray);
      parent.remove();
    });
  });
}
