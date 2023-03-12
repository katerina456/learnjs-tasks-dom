let title = document.querySelector('.title');

title.addEventListener('click', () => {
  let up = document.querySelector('.up');
  up.classList.toggle('view');

  let down = document.querySelector('.down');
  down.classList.toggle('view');

  let menu = document.querySelector('.menu');
  menu.classList.toggle('view');
})
