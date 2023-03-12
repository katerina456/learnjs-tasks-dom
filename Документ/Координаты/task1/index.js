let field = document.getElementById('field');

//верхний левый, внешний угол
let leftTopX = field.getBoundingClientRect().left;
let leftTopY = field.getBoundingClientRect().top;
console.log(leftTopX, leftTopY);

//нижний правый, внешний угол
let rightBottomX = leftTopX + field.offsetWidth;
let rightBottomY = leftTopY + field.offsetHeight;
console.log(rightBottomX, rightBottomY);

//верхний левый, внутренний угол
let leftInsideX = leftTopX + field.clientLeft;
let leftInsideY = leftTopY + field.clientTop;
console.log(leftInsideX, leftInsideY);

//нижний правый, внутренний угол
let rightInsideX = rightBottomX - field.clientLeft;
let rightInsideY = rightBottomY - field.clientTop;
console.log(rightInsideX, rightInsideY);