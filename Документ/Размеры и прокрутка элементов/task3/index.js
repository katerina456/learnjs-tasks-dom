let field = document.getElementById('field');

let ball = document.getElementById('ball');

let fieldWidth = field.clientWidth / 2;
let fieldHeight = field.clientHeight / 2;

let ballWidth = ball.offsetWidth / 2;
let ballHeight = ball.offsetHeight / 2;

ball.style.left = Math.round(fieldWidth - ballWidth) + 'px';
ball.style.top = Math.round(fieldHeight - ballHeight) + 'px';