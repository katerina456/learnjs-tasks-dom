let liAll = document.querySelectorAll('li');
liAll.forEach(li => {
    
    console.log(`В li вложено ${li.getElementsByTagName('li').length} элементов li`)

    console.log(li.textContent)
})
