let ul = document.createElement('ul');
let body = document.querySelector('body');
body.append(ul);

let value = 'str';

while (value !== null && value !== '') {
    value = prompt('vvos');
    if (value !== '') {
        let li = document.createElement('li');
        li.textContent = value;
        ul.append(li);
    }
}