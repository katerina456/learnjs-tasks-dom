let field = document.getElementById('field');

field.addEventListener('click', (e) => {
    let fieldCoords = field.getBoundingClientRect();

    let newX = e.clientX;
    let newY = e.clientY;
    
    let ball = document.getElementById('ball');

    let ballWidth = ball.offsetWidth / 2;
    let ballHeight = ball.offsetHeight / 2;

    let newBallX = newX - fieldCoords.top - field.clientTop - ballWidth;
    let newBallY = newY - fieldCoords.left - field.clientLeft - ballHeight;

    if (newBallY < 0) ballCoords.top = 0;

    if (newBallX < 0) ballCoords.left = 0;

    if (newBallX + ball.clientWidth > field.clientWidth) {
      newBallX = field.clientWidth - ball.clientWidth;
    }

    if (newBallY + ball.clientHeight > field.clientHeight) {
      newBallY = field.clientHeight - ball.clientHeight;
    }


    ball.style.left = newBallX + 'px';
    ball.style.top = newBallY + 'px';
}) 
