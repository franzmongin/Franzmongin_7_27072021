import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { chargeChoicesTemplate } from "./chargeChoicesTemplate.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { orderRecipesWithActiveTagsAndSearchValue } from "./orderRecipesWithActiveTagsAndSearchValue.js";
import { onClickRemoveOrding } from "./onClickRemoveOrding.js";
import { onChangeOrderInput } from "./onChangeOrderInput.js";

export function onClickSortingTag(orderedArray, activeSortings, recipeArray) {
  document.querySelectorAll(".choice").forEach((element) => {
    element.addEventListener("click", (e) => {
      let content = e.target.textContent;
      let searchValue = document.querySelector(".search-input").value;
      console.log(searchValue);
      // ustensils case
      if (e.target.classList.contains("choice-type-ustensils")) {
        if (orderedArray.ustensils.indexOf(content) > -1) {
          activeSortings.ustensils.push(e.target.textContent.toLowerCase());
          let newActiveUstensilsTagElement = document.createElement("div");
          newActiveUstensilsTagElement.setAttribute(
            "class",
            "active-choice active-choice-ustensils"
          );
          newActiveUstensilsTagElement.innerHTML = `<span class="ording-text">${content}</span>`;
          newActiveUstensilsTagElement.innerHTML += `<img  class="remove-ording" src="./images/icons/cross.svg" alt="">`;

          document
            .querySelector(".active-tags")
            .appendChild(newActiveUstensilsTagElement);
          element.remove();

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
        }
        onClickRemoveOrding(activeSortings, recipeArray, orderedArray);
        onChangeOrderInput(orderedArray, activeSortings, recipeArray);
        onClickSortingTag(orderedArray, activeSortings, recipeArray);
        //--- ustensils case

        // appliances case
      } else if (e.target.classList.contains("choice-type-appliances")) {
        if (orderedArray.appliances.indexOf(content) > -1) {
          activeSortings.appliances.push(e.target.textContent.toLowerCase());
          let newActiveAppliancesTagElement = document.createElement("div");
          newActiveAppliancesTagElement.setAttribute(
            "class",
            "active-choice active-choice-appliances"
          );
          newActiveAppliancesTagElement.innerHTML = `<span class="ording-text">${content}</span>`;
          newActiveAppliancesTagElement.innerHTML += `<img  class="remove-ording" src="./images/icons/cross.svg" alt="">`;
          document
            .querySelector(".active-tags")
            .appendChild(newActiveAppliancesTagElement);
          element.remove();
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
        }
        onClickRemoveOrding(activeSortings, recipeArray, orderedArray);
        onChangeOrderInput(orderedArray, activeSortings, recipeArray);
        onClickSortingTag(orderedArray, activeSortings, recipeArray);
        // --- appliances case

        //ingredients case
      } else if (e.target.classList.contains("choice-type-ingredients")) {
        if (orderedArray.ingredients.indexOf(content) > -1) {
          activeSortings.ingredients.push(e.target.textContent.toLowerCase());

          let newActiveIngredientsTagElement = document.createElement("div");
          newActiveIngredientsTagElement.setAttribute(
            "class",
            "active-choice active-choice-ingredients"
          );
          newActiveIngredientsTagElement.innerHTML = `<span class="ording-text">${content}</span>`;
          newActiveIngredientsTagElement.innerHTML += `<img  class="remove-ording" src="./images/icons/cross.svg" alt="">`;

          document
            .querySelector(".active-tags")
            .appendChild(newActiveIngredientsTagElement);
          element.remove();

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
        }
        onClickRemoveOrding(activeSortings, recipeArray, orderedArray);
        onChangeOrderInput(orderedArray, activeSortings, recipeArray);
        onClickSortingTag(orderedArray, activeSortings, recipeArray);
      }
      // --- ingredients case
    });
  });
}
