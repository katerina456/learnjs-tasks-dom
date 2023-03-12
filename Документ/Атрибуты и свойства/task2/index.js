let links = document.querySelectorAll('a')
links.forEach(link => {
    let str = link.textContent;
    if (str.includes('://') && !str.includes('http://internal.com')) {
      link.style.color = 'orange'; 
    }
    
})