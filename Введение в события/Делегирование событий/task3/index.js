let table = document.getElementById('grid');

table.addEventListener('click', (event) => {
    if (event.target.tagName == 'TH') {
        let tbody = table.querySelector('tbody');
        let array = Array.from(tbody.rows);

        let th = event.target;
        let type = th.dataset.type;

        let compare;

        switch (type) {
            case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[0 ].innerHTML - rowB.cells[0 ].innerHTML;
            };
            break;
            case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1;
            };
            break;
        }

        array.sort(compare);

        tbody.append(...array);
    }
})
