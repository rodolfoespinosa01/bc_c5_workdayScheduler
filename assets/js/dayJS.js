// set array and use dayJS function to show Weekday in text format
var weekDayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var currentWeekDayNumber = dayjs().day();
var currentWeekDay = weekDayArray[currentWeekDayNumber];


// set array and use dayJS function to show Month in text format

var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var currentMonthNumber = dayjs().month();
var currentMonth = monthArray[currentMonthNumber];

// use dayJS to get day of the month

var currentDay = dayjs().date();

// use dayJS to get current year

var currentYear = dayjs().year();

// add current day to p tag in starter code html
var pTagDate = document.querySelector('#currentDay');
pTagDate.textContent = currentWeekDay + ', ' + currentMonth + ' ' + currentDay + ' ' + currentYear;