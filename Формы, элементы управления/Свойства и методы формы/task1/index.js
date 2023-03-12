let genres = document.getElementById('genres');

let options = genres.querySelectorAll('option');
options.forEach(item => {
    if (item.selected) {
        alert(item.value);
        alert(item.textContent);
    }
})


let option = document.createElement('option');
option.value = "classic";
option.textContent = 'Классика';
genres.append(option);

option.selected = true;