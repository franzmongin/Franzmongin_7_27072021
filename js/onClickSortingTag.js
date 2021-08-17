import { fillRecipesHtml } from "./fillRecipesHtml.js";
import { chargeChoices } from "./chargeChoices.js";
import { fillChoicesArray } from "./fillChoicesArray.js";
import { removeDuplicateInChoices } from "./removeDuplicateInChoices.js";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
export function onClickSortingTag(
  orderedArray,
  activeSortings,
  orderedRecipes,
  recipeArray
) {
  document.querySelectorAll(".choice").forEach((element) => {
    element.addEventListener("click", (e) => {
      let content = e.target.textContent;
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
          orderedRecipes = recipeArray.filter((e) =>
            activeUstensils.every((v) => e.ustensils.includes(v))
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
      } else if (e.target.classList.contains("choice-type-appliances")) {
        activeSortings.appliances.push(e.target.textContent);
        if (orderedArray.appliances.indexOf(content) > -1) {
          orderedArray.appliances.splice(
            orderedArray.appliances.indexOf(content),
            1
          );
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
        }
      } else if (e.target.classList.contains("choice-type-ingredients")) {
        activeSortings.ingredients.push(e.target.textContent);
        if (orderedArray.ingredients.indexOf(content) > -1) {
          orderedArray.ingredients.splice(
            orderedArray.ingredients.indexOf(content),
            1
          );
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
        }
      }
    });
  });
}
