const palindrome = (str) => str === str.split("").reverse().join("");

console.log(palindrome("civic"));

const data = [
  {
    country: "Russia",
    city: "Saint Petersburg",
    hotel: "Hotel Leopold",
  },
  {
    country: "Spain",
    city: "Santa Cruz de Tenerife",
    hotel: "Apartment Sunshine",
  },
  {
    country: "Slowakia",
    city: "Vysokie Tatry",
    hotel: "Villa Kunerad",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hostel Friendship",
  },
  {
    country: "Indonesia",
    city: "Bali",
    hotel: "Ubud Bali Resort&SPA",
  },
  {
    country: "Netherlands",
    city: "Rotterdam",
    hotel: "King Kong Hostel",
  },
  {
    country: "Marocco",
    city: "Ourika",
    hotel: "Rokoko Hotel",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hotel Rehberge Berlin Mitte",
  },
];

const search = (word) => {
  const founded = [];

  data.forEach((destination) => {
    if (Object.values(destination).join(``).includes(word)) {
      founded.push(Object.values(destination).join(`, `));
    }
  });

  return founded;
};

console.log(search("Germany"));

const citiesOfCountry = (array) =>
  array.reduce((acc, element) => {
    acc[element.country]
      ? acc[element.country].push(element.city)
      : (acc[element.country] = [element.city]);

    return acc;
  }, {});

console.log(citiesOfCountry(data));
