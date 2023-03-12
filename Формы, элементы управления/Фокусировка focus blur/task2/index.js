let table = document.getElementById('bagua-table');

/* ваш код */
let flag = false;

table.addEventListener('click', (event) => {
    if (flag) return;

    let target = event.target.closest('td');
    let code = target.innerHTML;

    let edit = document.createElement('textarea');
    edit.classList.add('edit');
    edit.value = code;
    edit.focus();

    target.append(edit);

    let buttonOk = document.createElement('button');
    buttonOk.classList.add('button', 'ok');
    buttonOk.textContent = 'OK';

    buttonOk.addEventListener('click', (event) => {
        let parent = event.target.parentElement;
        let text = parent.querySelector('.edit').value;
        parent.innerHTML = text;

        flag = false;
        event.stopPropagation();
    })

    target.append(buttonOk);

    let buttonNo = document.createElement('button');
    buttonNo.classList.add('button', 'no');
    buttonNo.textContent = 'Отмена';

    buttonNo.addEventListener('click', (event) => {
        let parent = event.target.parentElement;
        let area = parent.querySelector('.edit');
        area.remove();
        let ok = parent.querySelector('.ok');
        ok.remove();
        let no = parent.querySelector('.no');
        no.remove();

        flag = false;
        event.stopPropagation();
    })

    target.append(buttonNo);

    flag = true;
})
