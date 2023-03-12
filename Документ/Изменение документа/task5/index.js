let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
};

let ul = document.createElement('ul');
let body = document.querySelector('body');
body.append(ul);

function createTree(data, ul) {
    for (let item in data) {
      
      let li = document.createElement('li');
      li.textContent = item;
      ul.append(li);

      if (typeof (data[item]) == "object") {
        
        let ul = document.createElement('ul');
        li.append(ul);
        createTree(data[item], ul);
      }
    }
}

createTree(data, ul);