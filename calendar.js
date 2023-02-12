const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  dayOfWeek -= 1;

  if (dayOfWeek >= daysInWeek || dayOfWeek < 0) {
    return `ERROR day of week "${dayOfWeek + 1}" does not exist`;
  }

  const calendar = [];
  const arrayOfDaysInMouth = [];
  const weeksInMouth = Math.floor(daysInMonth / daysInWeek);

  const addDay = (week) => calendar[week].push(arrayOfDaysInMouth.pop());

  for (let i = daysInMonth; i > 0; i--) {
    arrayOfDaysInMouth.push(i);
  }

  for (let week = 0; week <= weeksInMouth; week++) {
    calendar.push([]);

    if (week === 0) {
      for (let i = 0; i < dayOfWeek; i++) {
        calendar[week].unshift(daysInMonth - i);
      }

      for (let i = 0; i < daysInWeek - dayOfWeek; i++) {
        addDay(week);
      }

      continue;
    }
    if (week === weeksInMouth) {
      if (arrayOfDaysInMouth.length === 0) {
        calendar.pop();
        break;
      }

      for (let i = 0; arrayOfDaysInMouth.length > 0; i++) {
        addDay(week);
      }

      let day = 1;

      for (let i = calendar[week].length; i < daysInWeek; i++) {
        calendar[week].push(day++);
      }
    } else {
      for (let day = 0; day < daysInWeek; day++) {
        addDay(week);
      }
    }
  }

  return calendar;
};

const daysInMonth = 30;
const daysInWeek = 10;
const dayOfWeek = 5;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
