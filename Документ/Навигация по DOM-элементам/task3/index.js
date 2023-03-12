let table = document.querySelector('table');

let trAll = table.querySelectorAll('tr');

for (let i = 0; i < trAll.length; i++) {
    let tr = trAll[i];
    let tdAll = tr.querySelectorAll('td');
    for (let j = 0; j < tdAll.length; j++) {
        if (i == j) {
            let td = tdAll[j];
            td.style.backgroundColor = 'red';
        }
    }
}
    







