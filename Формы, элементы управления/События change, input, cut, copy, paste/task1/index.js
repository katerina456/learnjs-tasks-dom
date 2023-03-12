let form = document.forms.calculator;

    // ваш код

let initial = form.elements.money;
let interest = form.elements.interest;
let years = form.elements.months;

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать

initial.addEventListener('input', () => {
    calc();
})

interest.addEventListener('input', () => {
    calc();
})

years.addEventListener('change', () => {
    calc();
})


function calc() {
    let initial = +form.elements.money.value;
    let interest = +form.elements.interest.value * 0.01;
    let years = +form.elements.months.value / 12;

    let result = Math.round(initial * (1 + interest) ** years);

    let was = document.getElementById('money-before');
    was.textContent = initial;

    let now = document.getElementById('money-after');
    now.textContent = result;

    let green = document.getElementById('height-after');
    green.style.height = 100 * result / initial + 'px';
}


calc();