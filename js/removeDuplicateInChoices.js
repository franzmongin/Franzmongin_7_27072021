export function removeDuplicateInChoices(choicesArray) {
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
