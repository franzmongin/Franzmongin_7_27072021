export function orderRecipesWithActiveTags(
  tagType,
  activeTypeTags,
  recipeArray
) {
  switch (tagType) {
    case "ustensils":
      return recipeArray.filter((e) =>
        activeTypeTags.every((v) => e.ustensils.includes(v))
      );
    case "appliances":
      console.log(activeTypeTags);
      return recipeArray.filter((e) =>
        activeTypeTags.every((v) => e.appliance.includes(v))
      );
    case "ingredients":
      // console.log(activeTypeTags, recipeArray);
      // let newArray = recipeArray.filter((e) => {
      //   return e.ingredients.forEach((ing) => ing === "sucre");
      // });
      // console.log(newArray);
      let newArray = [];

      // recipeArray.foreach((recipe) =>
      //   recipe.ingredients.foreach((ing) => console.log(ing))
      // );
      newArray = recipeArray.filter((recipe) => {
        let ingArray = [];
        recipe.ingredients.forEach((ing) => {
          ingArray.push(ing.ingredient.toLowerCase());
        });
        if (activeTypeTags.every((e) => ingArray.includes(e))) {
          return true;
        }
      });

      console.log(newArray);
      return newArray;
    default:
      break;
  }
}
