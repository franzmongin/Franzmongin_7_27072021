import recipes from "../data/recipe.js";
import { Recipe } from "./Recipe.js";

document.querySelectorAll(".choices-selection").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("opened-list");
    element.querySelector(".choices-list").classList.toggle("show-list");
    element.querySelector(".select-arrow").classList.toggle("bottom-arrow");
  });
});

// create recipe objects with json and push to different arrays their ingredients, appliances and ustensils
let recipeArray = [];
let choicesArray = {
  ingredients: [],
  appliances: [],
  ustensils: [],
};
recipes.forEach((recipe) => recipeArray.push(new Recipe(recipe)));
let recipeListHtml = "";
recipeArray.forEach((recipe) => {
  recipeListHtml += recipe.getTemplate();
  if (recipe.ingredients) {
    recipe.ingredients.forEach((element) => {
      choicesArray.ingredients.push(element.ingredient);
    });
  }

  if (recipe.ustensils) {
    recipe.ustensils.forEach((ustensil) => {
      choicesArray.ustensils.push(ustensil);
    });
  }

  if (recipe.appliance) {
    choicesArray.appliances.push(recipe.appliance);
  }
});
document.querySelector(".recipes-list").innerHTML = recipeListHtml;
// ---

// suppression des doublons dans les tableaux d'ingrédients d'appareil et d'ustensiles
function removeDuplicate() {
  choicesArray.ingredients = choicesArray.ingredients.filter((el, index) => {
    return choicesArray.ingredients.indexOf(el) === index;
  });
  choicesArray.appliances = choicesArray.appliances.filter((el, index) => {
    return choicesArray.appliances.indexOf(el) === index;
  });
  choicesArray.ustensils = choicesArray.ustensils.filter((el, index) => {
    return choicesArray.ustensils.indexOf(el) === index;
  });
}
removeDuplicate();
// ---

// charge choices template
function chargeChoices(category) {
  let template = "";
  choicesArray[category].forEach((element) => {
    template += `<div class="choice choice-type-${category}">${element}</div>`;
  });
  document.querySelector(`.${category}-choices`).innerHTML = template;
}
chargeChoices("ingredients");
chargeChoices("ustensils");
chargeChoices("appliances");
// ---
