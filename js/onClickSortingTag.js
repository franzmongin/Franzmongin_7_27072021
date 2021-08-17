import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { chargeChoices } from "./chargeChoices.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
import { orderRecipesWithActiveTags } from "./orderRecipesWithActiveTags.js";
import recipe from "../data/recipe.js";
export function onClickSortingTag(
  orderedArray,
  activeSortings,
  orderedRecipes,
  recipeArray
) {
  document.querySelectorAll(".choice").forEach((element) => {
    // console.log(recipeArray);
    element.addEventListener("click", (e) => {
      let content = e.target.textContent;
      // ustensils case
      if (e.target.classList.contains("choice-type-ustensils")) {
        if (orderedArray.ustensils.indexOf(content) > -1) {
          activeSortings.ustensils.push(e.target.textContent);
          let newActiveUstensilsTagElement = document.createElement("div");
          newActiveUstensilsTagElement.setAttribute(
            "class",
            "active-choice active-choice-ustensils"
          );
          newActiveUstensilsTagElement.innerHTML = content;
          newActiveUstensilsTagElement.innerHTML += `<img src="./images/icons/cross.svg" alt="">`;

          document
            .querySelector(".active-tags")
            .appendChild(newActiveUstensilsTagElement);
          element.remove();
          let activeUstensils = activeSortings.ustensils.map((e) =>
            e.toLowerCase()
          );
          orderedRecipes = orderRecipesWithActiveTags(
            "ustensils",
            activeUstensils,
            recipeArray
          );
          fillRecipesHtml(orderedRecipes);
          orderedArray.ustensils = [];

          fillChoicesArray(orderedRecipes, orderedArray);
          console.log(orderedArray.ustensils);

          removeDuplicateInChoices(orderedArray);
          console.log(orderedArray.ustensils);
          console.log(content);
          console.log(orderedArray.ustensils.indexOf(content));
          console.log("active-ustensils", activeUstensils);
          console.log("orderedArray-ustensils", orderedArray.ustensils);
          activeUstensils.forEach((e) => {
            orderedArray.ustensils.splice(
              orderedArray.ustensils.indexOf(capitalizeFirstLetter(e)),
              1
            );
          });
          chargeChoices("ustensils", orderedArray);
          console.log(orderedArray.ustensils);
          console.log("-----------------------------------------");

          onClickSortingTag(
            orderedArray,
            activeSortings,
            orderedRecipes,
            recipeArray
          );
        }
        //--- ustensils case

        // appliances case
      } else if (e.target.classList.contains("choice-type-appliances")) {
        activeSortings.appliances.push(e.target.textContent);
        if (orderedArray.appliances.indexOf(content) > -1) {
          let newActiveAppliancesTagElement = document.createElement("div");
          newActiveAppliancesTagElement.setAttribute(
            "class",
            "active-choice active-choice-appliances"
          );
          newActiveAppliancesTagElement.innerHTML = content;
          newActiveAppliancesTagElement.innerHTML += `<img src="./images/icons/cross.svg" alt="">`;
          document
            .querySelector(".active-tags")
            .appendChild(newActiveAppliancesTagElement);
          element.remove();
          let activeAppliances = activeSortings.appliances.map((e) =>
            e.toLowerCase()
          );
          orderedRecipes = orderRecipesWithActiveTags(
            "appliances",
            activeAppliances,
            recipeArray
          );
          console.log(orderedRecipes);
          fillRecipesHtml(orderedRecipes);
          orderedArray.appliances = [];

          fillChoicesArray(orderedRecipes, orderedArray);
          // console.log(orderedArray.appliances);

          removeDuplicateInChoices(orderedArray);
          // console.log(orderedArray.appliances);
          // console.log(content);
          // console.log(orderedArray.appliances.indexOf(content));
          // console.log("active-appliances", activeAppliances);
          // console.log("orderedArray-appliances", orderedArray.appliances);
          activeAppliances.forEach((e) => {
            orderedArray.appliances.splice(
              orderedArray.appliances.indexOf(capitalizeFirstLetter(e)),
              1
            );
          });
          chargeChoices("appliances", orderedArray);
          console.log(orderedArray.appliances);
          console.log("-----------------------------------------");

          onClickSortingTag(
            orderedArray,
            activeSortings,
            orderedRecipes,
            recipeArray
          );
        }
        // --- appliances case

        //ingredients case
      } else if (e.target.classList.contains("choice-type-ingredients")) {
        activeSortings.ingredients.push(e.target.textContent);
        if (orderedArray.ingredients.indexOf(content) > -1) {
          let newActiveIngredientsTagElement = document.createElement("div");
          newActiveIngredientsTagElement.setAttribute(
            "class",
            "active-choice active-choice-ingredients"
          );
          newActiveIngredientsTagElement.innerHTML = content;
          newActiveIngredientsTagElement.innerHTML += `<img src="./images/icons/cross.svg" alt="">`;

          document
            .querySelector(".active-tags")
            .appendChild(newActiveIngredientsTagElement);
          element.remove();
          let activeIngredients = activeSortings.ingredients.map((e) =>
            e.toLowerCase()
          );
          orderedRecipes = orderRecipesWithActiveTags(
            "ingredients",
            activeIngredients,
            recipeArray
          );
          fillRecipesHtml(orderedRecipes);
          orderedArray.ingredients = [];

          fillChoicesArray(orderedRecipes, orderedArray);

          removeDuplicateInChoices(orderedArray);
          activeIngredients.forEach((e) => {
            orderedArray.ingredients.splice(
              orderedArray.ingredients.indexOf(capitalizeFirstLetter(e)),
              1
            );
          });
          chargeChoices("ingredients", orderedArray);

          onClickSortingTag(
            orderedArray,
            activeSortings,
            orderedRecipes,
            recipeArray
          );
        }
      }
      // --- ingredients case
    });
  });
}
