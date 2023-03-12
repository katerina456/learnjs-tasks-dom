let thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
    let target = event.target.closest('a');
    
    if (target) {
        event.preventDefault();

        let href = target.href;

        let largeImg = document.getElementById('largeImg');
        largeImg.src= `${href}`;   
    } 
})