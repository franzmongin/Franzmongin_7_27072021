import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { chargeChoicesTemplate } from "./chargeChoicesTemplate.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
import { orderRecipesWithActiveTags } from "./orderRecipesWithActiveTags.js";
import { onClickRemoveOrding } from "./onClickRemoveOrding.js";
import { onChangeOrderInput } from "./onChangeOrderInput.js";

export function onClickSortingTag(
  orderedArray,
  activeSortings,
  orderedRecipes,
  recipeArray
) {
  document.querySelectorAll(".choice").forEach((element) => {
    element.addEventListener("click", (e) => {
      let content = e.target.textContent;
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
          orderedRecipes = orderRecipesWithActiveTags(
            activeSortings,
            recipeArray
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
        onChangeOrderInput(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
        onClickSortingTag(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
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
          orderedRecipes = orderRecipesWithActiveTags(
            activeSortings,
            recipeArray
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
        onChangeOrderInput(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
        onClickSortingTag(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
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

          orderedRecipes = orderRecipesWithActiveTags(
            activeSortings,
            recipeArray
          );
          fillRecipesHtml(orderedRecipes);
          orderedArray = {
            ingredients: [],
            appliances: [],
            ustensils: [],
          };
          console.log(orderedArray.ingredients);
          fillChoicesArray(orderedRecipes, orderedArray, activeSortings);
          console.log(orderedArray.ingredients);
          removeDuplicateInChoices(orderedArray);
          console.log(orderedArray.ingredients);
          chargeChoicesTemplate("ustensils", orderedArray);
          chargeChoicesTemplate("appliances", orderedArray);
          chargeChoicesTemplate("ingredients", orderedArray);
        }
        onClickRemoveOrding(activeSortings, recipeArray, orderedArray);
        onChangeOrderInput(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
        onClickSortingTag(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
      }
      // --- ingredients case
    });
  });
}
