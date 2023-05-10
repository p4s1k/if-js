import { url } from "./url.js";

let availableSectionEl;

const search = async (searchRequest) => {
  url.searchParams.set("search", searchRequest);

  const searchResponse = await fetch(url);
  const hotelsData = await searchResponse.json();

  if (hotelsData.length === 0) {
    alert("NOT FOUND");
    return;
  }

  const hotelsElements = hotelsData.map(
    ({ name, city, country, imageUrl }) =>
      `
        <div class="card available__card">
            <div class="card__image available__card__image">
                <img src=${imageUrl} alt="view">
            </div>
            <span class="card__title available__card__title">${name}</span>
            <span class="card__location available__card__location">${city}, ${country}</span>
        </div>
        `
  );

  availableSectionEl = `
    <section class="available">
        <div class="wrapper">
            <h2 class="heading available__heading">Available Hotels</h2>          
            <div class="cards-row available__cards-row">${hotelsElements.join(
              "\n"
            )}</div>
        </div>
    </section>
`;

  const topSectionEl = document.querySelector(".top-selection");
  if (!document.querySelector(".available")) {
    topSectionEl.insertAdjacentHTML("afterend", availableSectionEl);
  } else {
    document.querySelector(
      ".available__cards-row"
    ).innerHTML = `${hotelsElements.join("\n")}`;
  }
};

const searchButtonEl = document.querySelector(".search-form__item-button");
const searchInputEl = document.querySelector(".search-form__item-name");

searchButtonEl.addEventListener("click", () => {
  if (searchInputEl.value) {
    console.log(searchInputEl.value);
    search(searchInputEl.value);
    searchInputEl.value = "";
  } else {
    alert("EMPTY VALUE");
  }
});

searchInputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (searchInputEl.value) {
      console.log(searchInputEl.value);
      search(searchInputEl.value);
      searchInputEl.value = "";
    } else {
      alert("EMPTY VALUE");
    }
  }
});
