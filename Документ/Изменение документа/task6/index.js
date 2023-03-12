let ul = document.querySelector('ul');

let list = ul.querySelectorAll('li');

list.forEach(item =>  {
  let parent = item.querySelectorAll('li');
  if (parent.length) {
    item.firstChild.data += ' [' + parent.length + ']';
  }
})