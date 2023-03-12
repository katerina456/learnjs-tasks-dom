let mouse = document.getElementById('mouse');

mouse.tabIndex = 0;

mouse.addEventListener('click', () => {
    mouse.style.left = mouse.getBoundingClientRect().left + 'px';
    mouse.style.top = mouse.getBoundingClientRect().top + 'px';

    mouse.style.position = 'fixed';    
})

mouse.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
          mouse.style.left = parseInt(mouse.style.left) - mouse.offsetWidth + 'px';
          return false;
        case 'ArrowUp':
          mouse.style.top = parseInt(mouse.style.top) - mouse.offsetHeight + 'px';
          return false;
        case 'ArrowRight':
          mouse.style.left = parseInt(mouse.style.left) + mouse.offsetWidth + 'px';
          return false;
        case 'ArrowDown':
          mouse.style.top = parseInt(mouse.style.top) + mouse.offsetHeight + 'px';
          return false;
      }
})
