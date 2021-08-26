export function orderRecipesWithActiveTagsAndSearchValue(
  activeSortings,
  recipeArray,
  value = ""
) {
  function orderWithActiveTags() {
    let activeUstensils = activeSortings.ustensils.map((e) => e.toLowerCase());
    let activeAppliances = activeSortings.appliances.map((e) =>
      e.toLowerCase()
    );
    let activeIngredients = activeSortings.ingredients.map((e) =>
      e.toLowerCase()
    );
    return recipeArray.filter((e) => {
      let ingArray = [];
      e.ingredients.forEach((ing) => {
        ingArray.push(ing.ingredient.toLowerCase());
      });
      return (
        activeUstensils.every((v) => e.ustensils.includes(v)) &&
        activeAppliances.every((v) => e.appliance.includes(v)) &&
        activeIngredients.every((i) => ingArray.includes(i))
      );
    });
  }
  let orderedRecipesWithTags = orderWithActiveTags();

  function orderWithSearchValue() {
    return orderedRecipesWithTags.filter((e) => {
      let ingArray = [];
      e.ingredients.forEach((ing) => {
        ingArray.push(ing.ingredient.toLowerCase());
      });
      return (
        ingArray.some((i) => i.toLowerCase().includes(value.toLowerCase())) ||
        e.name.toLowerCase().includes(value.toLowerCase()) ||
        e.description.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
  let newArray = orderWithSearchValue();
  return newArray;
}
