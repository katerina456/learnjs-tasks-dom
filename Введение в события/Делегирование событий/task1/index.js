let container = document.getElementById('container');

container.addEventListener('click', (event) => {
    if (event.target.className != 'remove-button') return;

    let pane = event.target.closest('.pane');
    pane.remove();
})
