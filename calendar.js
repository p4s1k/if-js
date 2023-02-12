const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (dayOfWeek > daysInWeek || dayOfWeek < 1) {
    return `ERROR day of week "${dayOfWeek}" does not exist`;
  }

  const calendar = [];
  const weeksInMonth = Math.floor(daysInMonth / daysInWeek);
  const daysArray = [];

  dayOfWeek -= 1;

  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  let modifyDaysArray = [...daysArray];

  if (dayOfWeek !== 0) {
    daysArray.reverse();
    modifyDaysArray = [
      ...daysArray.slice(0, dayOfWeek).reverse().concat(modifyDaysArray),
    ];
    daysArray.reverse();
  }

  if (modifyDaysArray.length % daysInWeek !== 0) {
    modifyDaysArray = modifyDaysArray.concat(daysArray.slice(0, daysInWeek));
  }

  for (let week = 0; week <= weeksInMonth; week++) {
    if (modifyDaysArray.length !== 0) {
      calendar.push(modifyDaysArray.splice(0, daysInWeek));
    }
  }

  return calendar;
};

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 5;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
