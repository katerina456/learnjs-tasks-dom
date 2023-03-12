let panes = document.querySelectorAll('.pane');

panes.forEach(pane => {
  let btn = document.createElement('button');
  btn.classList.add('remove-button');
  btn.textContent = '[x]';
  pane.append(btn);

  btn.addEventListener('click', (event) => {
    let parent = event.currentTarget.parentElement
    parent.style.display = 'none'
  })
  
})
