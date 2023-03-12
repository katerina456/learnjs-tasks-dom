let elem = document.querySelector('div');

let text = '<p>text</>';

elem.append(document.createTextNode(text));
elem.innerHTML = text;
elem.textContent = text;

/* Работа 1 и 3 способа одинаковы - строка будет добавлена как текст */