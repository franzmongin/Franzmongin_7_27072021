import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { chargeChoicesTemplate } from "./chargeChoicesTemplate.js";
import { onClickSortingTag } from "./onClickSortingTag.js";

export function onChangeOrderInput(
  orderedArray,
  activeSortings,
  orderedRecipes,
  recipeArray
) {
  document.querySelectorAll(".orders-input").forEach((input) => {
    input.addEventListener("keyup", () => {
      let inputValue = input.value;
      let orderedArrayWithTyping = JSON.parse(JSON.stringify(orderedArray));

      if (input.classList.contains("ingredients-input")) {
        orderedArrayWithTyping.ingredients = orderedArray.ingredients.filter(
          (ingredient) => {
            return (
              ingredient.toLowerCase().includes(inputValue.toLowerCase()) &&
              !activeSortings.ingredients.includes(inputValue.toLowerCase())
            );
          }
        );
        removeDuplicateInChoices(orderedArrayWithTyping);
        chargeChoicesTemplate("ingredients", orderedArrayWithTyping);
        chargeChoicesTemplate("appliances", orderedArrayWithTyping);
        chargeChoicesTemplate("ustensils", orderedArrayWithTyping);

        onClickSortingTag(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
      } else if (input.classList.contains("appliances-input")) {
        orderedArrayWithTyping.appliances = orderedArray.appliances.filter(
          (appliance) =>
            appliance.toLowerCase().includes(inputValue.toLowerCase()) &&
            !activeSortings.appliances.includes(inputValue.toLowerCase())
        );
        removeDuplicateInChoices(orderedArrayWithTyping);
        chargeChoicesTemplate("ingredients", orderedArrayWithTyping);
        chargeChoicesTemplate("appliances", orderedArrayWithTyping);
        chargeChoicesTemplate("ustensils", orderedArrayWithTyping);
        onClickSortingTag(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
      } else if (input.classList.contains("ustensils-input")) {
        orderedArrayWithTyping.ustensils = orderedArray.ustensils.filter(
          (ustensil) =>
            ustensil.toLowerCase().includes(inputValue.toLowerCase()) &&
            !activeSortings.ustensils.includes(inputValue.toLowerCase())
        );
        removeDuplicateInChoices(orderedArrayWithTyping);
        chargeChoicesTemplate("ingredients", orderedArrayWithTyping);
        chargeChoicesTemplate("appliances", orderedArrayWithTyping);
        chargeChoicesTemplate("ustensils", orderedArrayWithTyping);
        onClickSortingTag(
          orderedArray,
          activeSortings,
          orderedRecipes,
          recipeArray
        );
      }
    });
  });
}
