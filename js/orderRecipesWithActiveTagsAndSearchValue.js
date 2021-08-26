export function orderRecipesWithActiveTagsAndSearchValue(
  activeSortings,
  recipeArray,
  searchValue = ""
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
      return (
        activeUstensils.every((v) => e.ustensils.includes(v)) &&
        activeAppliances.every((v) => e.appliance === v) &&
        activeIngredients.every((i) =>
          e.ingredients.some((ing) => ing.ingredient.toLowerCase() === i)
        )
      );
    });
  }
  let orderedRecipesWithTags = orderWithActiveTags();
  function orderWithSearchValue(value) {
    return orderedRecipesWithTags.filter((e) => {
      return (
        e.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(value.toLowerCase())
        ) ||
        e.name.toLowerCase().includes(value.toLowerCase()) ||
        e.description.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
  let newArray = orderWithSearchValue(searchValue);
  return newArray;
}
