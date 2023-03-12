// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.

setInterval(() => {
    showNotification({
        top: 10, // 10px от верхней границы окна (по умолчанию 0px)
        right: 10, // 10px от правого края окна (по умолчанию 0px)
        html: "Hello!", // HTML-уведомление
        className: "welcome" // дополнительный класс для div (необязательно)
      });
  }, 2000);

function showNotification({top, right, html, className}) {
    let div = document.createElement('div');
    div.classList.add("notification");
    div.classList.add(className);

    div.style.top = top + 'px';
    div.style.right = right + 'px';

    div.textContent = html;

    let body = document.querySelector('body');
    body.append(div);

    setTimeout(() => div.remove(), 1500);
}