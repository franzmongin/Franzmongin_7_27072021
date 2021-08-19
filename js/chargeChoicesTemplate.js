export function chargeChoicesTemplate(category, choicesArray) {
  let template = "";
  choicesArray[category].forEach((element) => {
    template += `<div class="choice choice-type-${category}">${element}</div>`;
  });
  document.querySelector(`.${category}-choices`).innerHTML = template;
}
