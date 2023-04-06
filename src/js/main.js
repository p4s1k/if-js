import { data } from "./data.js";

const homesCardsRowEl = document.querySelector(".homes__cards-row");

const homesCards = data.map(
  (dataElement) =>
    `<div class="card homes__card">
      <div class="card__image homes__card__image">
          <img src=${dataElement.imageUrl} alt="view" />
      </div>
      <span class="homes__card__title card__title">${dataElement.name}</span>
      <span class="card__location homes__card__location">
      ${dataElement.city}, ${dataElement.country}
      </span>
     </div>`
);

homesCardsRowEl.innerHTML = homesCards.join("\n");