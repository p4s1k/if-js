const getCalendarMonth = (
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate
) => {
  const objectOfDay = {
    dayOfMonth: 28, // required field - день месяца
    notCurrentMonth: false, // optional field - день не входит в текущий месяц
    selectedDay: false, // optional field - выбранный пользователем день
    dayOfStay: false, // optional field - день прибывания
  };

  if (dayOfWeek > daysInWeek) {
    return `ERROR day of week ${dayOfWeek} does not exist`;
  }

  const calendar = [];
  const weeksInMonth = Math.ceil((daysInMonth + dayOfWeek) / daysInWeek);
  let day = 1;

  if (dayOfWeek !== 0) {
    objectOfDay.notCurrentMonth = !objectOfDay.notCurrentMonth;
    day = daysInMonth - dayOfWeek + 1;
  }

  for (let i = 0; i < weeksInMonth; i++) {
    calendar.push([]);

    for (let j = 0; j < daysInWeek; j++) {
      if (day > daysInMonth) {
        objectOfDay.notCurrentMonth = !objectOfDay.notCurrentMonth;
        day = 1;
      }

      objectOfDay.dayOfStay =
        objectOfDay.notCurrentMonth === false &&
        checkInDate <= day &&
        checkOutDate >= day;

      objectOfDay.dayOfMonth = day++;

      calendar[i].push({ ...objectOfDay });
    }
  }

  return calendar;
};

const daysInMonth = 31;
const daysInWeek = 7;
const dayOfWeek = 4;
const checkInDate = 1;
const checkOutDate = 5;
const calendarMonth = getCalendarMonth(
  daysInMonth,
  daysInWeek,
  dayOfWeek,
  checkInDate,
  checkOutDate
);

console.log(calendarMonth);
