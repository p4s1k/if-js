const replacer = (match, p1, p2, p3) => [p3, p2, p1].join(`.`);

const dateFormat = (date) => date.replace(/(\w+).(\w+).(\w+)/, replacer);

console.log(dateFormat(`2023-12-31`));

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

function search(word) {
  const result = [];
  for (const object of data) {
    for (const property in object) {
      if (object[property].toLowerCase().includes(word.toLowerCase())) {
        result.push([object.country, object.city, object.hotel].join(`,`));
        break;
      }
    }
  }
  return result;
}

console.log(search(`GeRmanY`));
