import { data } from "./data.js";

const createElement = (tagName, arrOfClasses = []) => {
  const element = document.createElement(tagName);
  arrOfClasses.forEach((item) => element.classList.add(item));
  return element;
};

const createArrowButtonEl = (element, bemModifier) => {
  const arrowButtonEl = createElement("div", ["arrow-button", bemModifier]);
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svgEl.innerHTML = '<use href="./src/img/sprite.svg#navigation" />';

  arrowButtonEl.appendChild(svgEl);
  element.appendChild(arrowButtonEl);
};

const advantagesEl = document.body.querySelector(".advantages");
const homesEl = createElement("section", ["homes"]);
const homesWrapperEl = createElement("div", ["wrapper", "homes__wrapper"]);
const homesContainerEl = createElement("div", [
  "container",
  "homes__container",
]);
const homesHeadingEl = createElement("h2", ["heading", "homes__heading"]);
homesHeadingEl.textContent = "Homes guests loves";
const homesCardsRowEl = createElement("div", ["cards-row", "homes__cards-row"]);

advantagesEl.insertAdjacentElement("afterend", homesEl);
homesEl.appendChild(homesWrapperEl);
homesWrapperEl.appendChild(homesContainerEl);
homesContainerEl.appendChild(homesHeadingEl);
homesContainerEl.appendChild(homesCardsRowEl);
createArrowButtonEl(homesCardsRowEl, "arrow-button_tablet");

for (const dataElement of data) {
  if (data.indexOf(dataElement) === 4) {
    break;
  }

  const homesCardEl = createElement("div", ["card", "homes__card"]);
  const cardImageEl = createElement("div", [
    "card__image",
    "homes__card__image",
  ]);
  const imgEl = createElement("img");
  const homesCardTittleEl = createElement("span", [
    "homes__card__title",
    "card__title",
  ]);
  const homesCardLocationEl = createElement("span", [
    "card__location",
    "homes__card__location",
  ]);

  if (data.indexOf(dataElement) >= 2) {
    homesCardEl.classList.add("card_not-mobile");
  }

  imgEl.src = dataElement.imageUrl;
  homesCardTittleEl.textContent = dataElement.name;
  homesCardLocationEl.textContent = dataElement.city;

  homesCardsRowEl.appendChild(homesCardEl);
  homesCardEl.appendChild(cardImageEl);
  cardImageEl.appendChild(imgEl);
  homesCardEl.appendChild(homesCardTittleEl);
  homesCardEl.appendChild(homesCardLocationEl);
}

const homesCardImageElCol =
  document.getElementsByClassName("homes__card__image");

createArrowButtonEl(homesCardImageElCol.item(1), "arrow-button_mobile");
createArrowButtonEl(homesCardImageElCol.item(3), "arrow-button_desktop");
