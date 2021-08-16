export function onClickSortingTag(choicesArray, activeSortings) {
  document.querySelectorAll(".choice").forEach((element) => {
    element.addEventListener("click", (e) => {
      let content = e.target.textContent;
      if (e.target.classList.contains("choice-type-ustensils")) {
        if (choicesArray.ustensils.indexOf(content) > -1) {
          activeSortings.ustensils.push(e.target.textContent);
          choicesArray.ustensils.splice(
            choicesArray.ustensils.indexOf(content),
            1
          );
          let newActiveUstentsilsTagElement = document.createElement("div");
          newActiveUstentsilsTagElement.setAttribute(
            "class",
            "active-choice active-choice-ustensils"
          );
          newActiveUstentsilsTagElement.innerHTML = content;
          newActiveUstentsilsTagElement.innerHTML += `<img src="./images/icons/cross.svg" alt="">`;

          document
            .querySelector(".active-tags")
            .appendChild(newActiveUstentsilsTagElement);
          element.remove();
        }
      } else if (e.target.classList.contains("choice-type-appliances")) {
        activeSortings.appliances.push(e.target.textContent);
        if (choicesArray.appliances.indexOf(content) > -1) {
          choicesArray.appliances.splice(
            choicesArray.appliances.indexOf(content),
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
        if (choicesArray.ingredients.indexOf(content) > -1) {
          choicesArray.ingredients.splice(
            choicesArray.ingredients.indexOf(content),
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
