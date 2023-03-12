document.addEventListener('mouseover', (event) => {
    if (!event.target.dataset.tooltip) return
    let target = event.target;

    let div = document.createElement('div');
    div.classList.add('tooltip');
    div.innerHTML = target.dataset.tooltip;

    let body = document.querySelector('body')
    body.append(div)

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - div.offsetWidth) / 2;
    if (left < 0) left = 0; 

    let top = coords.top - div.offsetHeight - 5;
    if (top < 0) { 
      top = coords.top + target.offsetHeight + 5;
    }

    div.style.left = left + 'px';
    div.style.top = top + 'px';
})

document.addEventListener('mouseout', (event) => {
    if (!event.target.dataset.tooltip) return

    let div = document.querySelector('.tooltip')
    div.remove()
})