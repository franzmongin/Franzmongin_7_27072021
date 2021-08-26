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
    let orderedArrayWithSearchValue = [];
    for (const recipe of orderedRecipesWithTags) {
      if (
        recipe.ingredients.some((i) =>
          i.ingredient.toLowerCase().includes(value.toLowerCase())
        ) ||
        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
        recipe.description.toLowerCase().includes(value.toLowerCase())
      ) {
        orderedArrayWithSearchValue.push(recipe);
      }
    }
    return orderedArrayWithSearchValue;
  }
  let newArray = orderWithSearchValue(searchValue);
  return newArray;
}
