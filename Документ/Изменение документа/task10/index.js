let trAll = document.querySelectorAll('tr');

let array = Array.from(trAll);

let newArray = array.slice(1);
newArray.sort((firstRow, secondRow) => firstRow.cells[0].innerHTML > secondRow.cells[0].innerHTML ? 1 : -1);

let table = document.querySelector('table');
table.tBodies[0].append(...newArray);