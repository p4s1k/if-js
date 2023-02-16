const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (dayOfWeek > daysInWeek) {
    return `ERROR day of week ${dayOfWeek} does not exist`;
  }

  const calendar = [];
  const weeksInMonth = Math.ceil((daysInMonth + dayOfWeek) / daysInWeek);
  let day = 1;

  if (dayOfWeek !== 0) {
    day = daysInMonth - dayOfWeek + 1;
  }

  for (let i = 0; i < weeksInMonth; i++) {
    calendar.push([]);
    for (let j = 0; j < daysInWeek; j++) {
      if (day > daysInMonth) {
        day = 1;
      }
      calendar[i].push(day++);
    }
  }

  return calendar;
};

const daysInMonth = 31;
const daysInWeek = 7;
const dayOfWeek = 6;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
