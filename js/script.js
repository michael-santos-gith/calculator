let showNumber = document.querySelector('#show-number');
let numbers = document.querySelectorAll('.numbers .numbers-click');
let symbolsOperation = document.querySelectorAll('.numbers .symbols-operation');

numbers.forEach(function(val, ind) {
    if (ind == 0) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent = '';
        })
    } else if (ind == 1) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 7;
        })
    } else if (ind == 2) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 8;
        })
    } else if (ind == 3) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 9;
        })
    } else if (ind == 4) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 4;
        })
    } else if (ind == 5) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 5;
        })
    } else if (ind == 6) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 6;
        })
    } else if (ind == 7) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 1;
        })
    } else if (ind == 8) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 2;
        })
    } else if (ind == 9) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 3;
        })
    } else if (ind == 10) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += 0;
        })
    } else if (ind == 11) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent += '.';
        })
    }
})