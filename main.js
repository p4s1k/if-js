const replacer = (match, p1, p2, p3) => [p3, p2, p1].join(`.`);

const changeDateFormat = (date) => date.replace(/(\w+).(\w+).(\w+)/, replacer);

console.log(changeDateFormat(`2023-12-31`));

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
  const result = [];

  for (const destination of data) {
    for (const destinationKey in destination) {
      if (
        destination[destinationKey].toLowerCase().includes(word.toLowerCase())
      ) {
        result.push(Object.values(destination).join(","));
      }
    }
  }

  return result;
};

console.log(search(`GeRmanY`));
