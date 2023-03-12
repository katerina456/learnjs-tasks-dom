// ...ваш код...
// Заметьте: <textarea> должен иметь class="edit"
// my.css содержит стиль, чтобы <textarea> и <div> были одного размера

let view = document.querySelector('.view');

view.addEventListener('click', () => {
    let edit = document.createElement('textarea');
    edit.classList.add('edit');
    edit.value = view.textContent;

    edit.addEventListener('blur', () => {
        view.style.display = 'block';
        view.textContent = edit.value;
        edit.remove();
    })

    let body = document.querySelector('body');
    body.append(edit);

    view.style.display = 'none';
})

