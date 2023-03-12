let start = document.querySelector('.start');

start.addEventListener('click', () => {
  setClock()
})

let stop = document.querySelector('.stop');

stop.addEventListener('click', () => {
  clearInterval(timerId);
})

let timerId

function setClock() {
  let date = new Date();
  let hour = date.getHours();
  let minut = date.getMinutes();
  let second = date.getSeconds();

  let hh = document.querySelector('.hh');
  setTimeElem(hh, hour);

  let mm = document.querySelector('.mm');
  setTimeElem(mm, minut);

  let ss = document.querySelector('.ss');
  setTimeElem(ss, second);

  timerId = setInterval(tick, 1000)

  function tick() {
    ss.textContent = +ss.textContent + 1;
    setFormat(ss);

    if (ss.textContent == '60') {
      ss.textContent = '00';
      mm.textContent = +mm.textContent + 1;
      setFormat(mm);
    }

    if (mm.textContent == '60') {
      mm.textContent = '00';
      hh.textContent = +hh.textContent + 1;
      setFormat(hh);
    }

    if (hh.textContent == '24') {
      hh.textContent = '00';
    }
  }
}

function setTimeElem(elem, value) {
  elem.textContent = value;
  setFormat(elem);
}

function setFormat(elem) {
  if (elem.textContent.length == 1) {
    elem.textContent = '0' + elem.textContent
  }
}