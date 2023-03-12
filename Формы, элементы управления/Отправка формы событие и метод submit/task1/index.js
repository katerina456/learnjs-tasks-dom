let button = document.querySelector('.button');

button.addEventListener('click', () => {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert("Вы ввели: " + value);
      });
})


function showPrompt(html, callback) {
    let div = document.getElementById('prompt-form-container');
    div.style.display = 'inline-block';
    document.querySelector('body').style.overflowY = 'hidden';

    let message = document.getElementById('prompt-message');
    message.innerHTML = html;

    let form = document.getElementById('prompt-form');

    let input = form.elements.text;
    input.focus();

    let cancel = form.elements.cancel;

    cancel.addEventListener('click', () => {
        setCansel()
    })

    form.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            setCansel()
        }
    })

    function setCansel() {
        div.style.display = 'none';
        document.querySelector('body').style.overflowY = '';
        callback(null);
    }


    form.addEventListener('submit', (event) => {
        let text = input.value;
        if (text !== ''){ 
            div.style.display = 'none';
            document.querySelector('body').style.overflowY = '';
            callback(text);
        } else {
            event.preventDefault();
        }
    })

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.addEventListener('keydown', (e) => {
        if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
        }
    })

    firstElem.addEventListener('keydown', (e) => {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
          }
    })
}