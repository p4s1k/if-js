const homesData = [];

const createHomesCards = () => {
  const homesCardsRowEl = document.querySelector(".homes__cards-row");

  const homesCards = homesData.map(
    ({ imageUrl, city, country, name }) =>
      `<div class="card homes__card">
      <div class="card__image homes__card__image">
          <img src=${imageUrl} alt="view" />
      </div>
      <span class="homes__card__title card__title">${name}</span>
      <span class="card__location homes__card__location">
      ${city}, ${country}
      </span>
     </div>`
  );

  homesCardsRowEl.innerHTML = homesCards.join("\n");
};

const promise = fetch("https://if-student-api.onrender.com/api/hotels/popular");

promise
  .then((resolve) => {
    return resolve.json();
  })
  .then((responseData) => {
    for (const dataKey in responseData) {
      homesData.push(responseData[+dataKey]);
    }
    createHomesCards();
  });

const inputBlockFilterEl = document.querySelector(".input-block_filter");
const itemFilterEl = document.querySelector(".search-form__item-filter");
const counterObjects = {
  adults: {
    name: "Adults",
    value: 1,
    min: 1,
    max: 30,
  },
  children: {
    name: "Children",
    value: 0,
    min: 0,
    max: 10,
  },
  rooms: {
    name: "Rooms",
    value: 1,
    min: 1,
    max: 30,
  },
};

const closeDropdown = (event) => {
  if (!inputBlockFilterEl.contains(event.target)) {
    inputBlockFilterEl
      .querySelector(".item-filter__dropdown")
      .classList.remove("item-filter__dropdown_active");
  }
};

document.body.addEventListener("click", closeDropdown);

const openDropdown = (event) => {
  if (event.target.classList.contains("search-form__item-filter")) {
    event.currentTarget
      .querySelector(".item-filter__dropdown")
      .classList.toggle("item-filter__dropdown_active");
  }
};

inputBlockFilterEl.addEventListener("click", openDropdown);

Object.keys(counterObjects).forEach((counterKey) => {
  const { name, value } = counterObjects[counterKey];
  inputBlockFilterEl.querySelector(
    ".dropdown__counter-container"
  ).innerHTML += `<div class="item-filter__counter" key="${counterKey}">
                      <div class="counter__title-block">
                        <span class="counter__title">${name}</span>
                      </div>
                      <div class="counter__buttons-block">
                        <button class="counter__button counter__button_minus counter__button_disabled" type="button" disabled="true">-</button>
                        <input class="item-filter__input" type="text" readonly="readonly" value=${value}>
                        <button class="counter__button counter__button_plus" type="button">+</button>
                      </div>
                    </div>`;
});

const updateItemFilterElValue = () => {
  const { adults, children, rooms } = counterObjects;
  itemFilterEl.value = `${adults.value} ${adults.name} — ${children.value} ${children.name} — ${rooms.value} ${rooms.name}`;
};

updateItemFilterElValue();

const counterElList = document.querySelectorAll(".item-filter__counter");

const enableButton = (counterObject, counterEl, currentButtonEl) => {
  if (
    counterObject.value === counterObject.max ||
    counterObject.value === counterObject.min
  ) {
    counterEl.querySelectorAll(".counter__button").forEach((buttonEl) => {
      if (!buttonEl.isEqualNode(currentButtonEl)) {
        buttonEl.disabled = false;
        buttonEl.classList.toggle("counter__button_disabled");
      }
    });
  }
};

const disabledButton = (counterObject, buttonEl) => {
  if (
    counterObject.value === counterObject.max ||
    counterObject.value === counterObject.min
  ) {
    buttonEl.disabled = true;
    buttonEl.classList.toggle("counter__button_disabled");
  }
};

const childAgeSelectEl = document.createElement("select");
const childAgeSelectorContainerEl = document.querySelector(
  ".dropdown__child-age-select-container"
);

for (let i = 0; i < 18; i++) {
  childAgeSelectEl.innerHTML += `<option>${i} years old</option>>`;
}

const addChildAgeSelectEl = () => {
  childAgeSelectorContainerEl.append(childAgeSelectEl.cloneNode(true));
};

const removeChildSelectEl = () => {
  childAgeSelectorContainerEl.lastElementChild.remove();
};

const checkChildren = () => {
  const childAgeContainer = document.querySelector(
    ".dropdown__child-age-container"
  );
  const { value, min } = counterObjects.children;

  if (value === min) {
    childAgeContainer.classList.remove("dropdown__child-age-container_active");
  }
  if (value === min + 1) {
    childAgeContainer.classList.add("dropdown__child-age-container_active");
  }

  childAgeSelectorContainerEl.querySelectorAll("select").length < value
    ? addChildAgeSelectEl()
    : removeChildSelectEl();
};

const counterFunction = (event) => {
  if (!event.target.classList.contains("counter__button")) {
    return;
  }

  const buttonEl = event.target;
  const counterEl = event.currentTarget;

  const currentInput = counterEl.querySelector("input");
  const counterObject = counterObjects[counterEl.getAttribute("key")];

  enableButton(counterObject, counterEl, buttonEl);

  if (
    buttonEl.classList.contains("counter__button_plus") &&
    currentInput.value < counterObject.max
  ) {
    counterObject.value = ++currentInput.value;
  }
  if (
    buttonEl.classList.contains("counter__button_minus") &&
    currentInput.value > counterObject.min
  ) {
    counterObject.value = --currentInput.value;
  }

  if (counterObject.name === counterObjects.children.name) {
    checkChildren();
  }

  disabledButton(counterObject, buttonEl);
  updateItemFilterElValue();
};

counterElList.forEach((counterEl) => {
  counterEl.addEventListener("click", counterFunction);
});
