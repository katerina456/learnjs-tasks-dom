let list = document.querySelectorAll('li');
list.forEach(li => {
    let span = document.createElement('span');
    li.insertAdjacentElement('afterbegin', span)
    span.append(span.nextSibling);
})

let tree = document.getElementById('tree');

tree.addEventListener('click', (event) => {
    if (event.target.tagName == 'SPAN') {
        let parent = event.target.parentNode;
        let children = parent.querySelector('ul');

        if (!children) return;

        children.hidden = !children.hidden;
    }
})
