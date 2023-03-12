let contents = document.getElementById('contents');

contents.addEventListener('click', (event) => {
    let target = event.target.closest('a');
    
    if (target) {
        let answer = confirm('Вы действительно хотите покинуть страницу?');

        if (answer) return
            event.preventDefault();
    } 
})