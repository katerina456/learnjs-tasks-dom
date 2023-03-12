function createCalendar(elem, year, month) {
  let table = document.createElement('table');
  let tr = document.createElement('tr');

  let array = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  for (let i = 0; i < array.length; i++) {
    let td = document.createElement('th');
    td.textContent = array[i];
    tr.append(td);
  } 

  table.append(tr);

  let data = new Date(year, month - 1);

  let week = document.createElement('tr');

  for (let i = 0; i < data.getDay()-1; i++) {
    week.append(document.createElement('td'));
  }

  while (data.getMonth() == month-1) {
    let day = document.createElement('td');
    day.textContent = data.getDate();
    week.append(day)

    if (data.getDay() % 7 == 0) {
      table.append(week);
      week = document.createElement('tr');
    }

    data.setDate(data.getDate() + 1);
  }

  if(week.querySelectorAll('td').length < 7) {
    for (let i = week.querySelectorAll('td').length; i < 7; i++) {
      week.append(document.createElement('td'));
    }

    table.append(week);
  }

  elem.append(table);
}

let cal = document.querySelector('.cal');

createCalendar(cal, 2012, 9);