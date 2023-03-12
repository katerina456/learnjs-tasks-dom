// отметить картинки для удобства разработки
// этот код может быть удалён по вашему усмотрению
  let i = 1;
  for(let li of document.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  }

// ...ваш код, который сделает карусель рабочей

let slider = document.querySelector('.slider');

let arrows = slider.querySelectorAll('.arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('click', (event) => {
    let images = slider.querySelectorAll('.slider-item');

    let array = getVisible(images); 

    images.forEach(image => {
      image.classList.remove('visible');
    })

    let button = event.target;
    if (button.classList.contains('left')) {
      if (array[0] !== 0) {
        for(let i = 0; i < array.length; i++) {
          array[i] = array[i] - 1;
        }
      }
    } else {
      if (array[2] !== images.length - 1) {
        for(let i = 0; i < array.length; i++) {
          array[i] = array[i] + 1;
        }
      }
    }

    setVisible(images, array);
  })
})

function getVisible(images) {
  let array = [];
  
  images.forEach(image => {
    if (image.classList.contains('visible')) {
      let number = image.querySelector('span').textContent;
      array.push(+number-1);
    }
  })

  return array;
}

function setVisible(images, array) { 
  for (let i = 0; i < array.length; i++) {
    let image = images[array[i]];
    image.classList.add('visible')
  }
}