let showNumber = document.querySelector('#show-number');
let numbers = document.querySelectorAll('.numbers .numbers-click');
let symbolsOperation = document.querySelectorAll('.numbers .symbols-operation');
let calculateNumbers = '';

function clickNumbers(ind, num) {
    numbers[ind].addEventListener('click', function() {
        calculateNumbers += numbers[ind].value = num;
        showNumber.textContent += num;
        console.log(calculateNumbers)
    })
}

numbers.forEach(function(val, ind) {
    if (ind == 0) {
        numbers[ind].addEventListener('click', function() {
            showNumber.textContent = '';
        })
    } else if (ind == 1) {
        clickNumbers(ind, val = 7);
    } else if (ind == 2) {
        clickNumbers(ind, val = 8);
    } else if (ind == 3) {
        clickNumbers(ind, val = 9);
    } else if (ind == 4) {
        clickNumbers(ind, val = 4);
    } else if (ind == 5) {
        clickNumbers(ind, val = 5);
    } else if (ind == 6) {
        clickNumbers(ind, val = 6);
    } else if (ind == 7) {
        clickNumbers(ind, val = 1);
    } else if (ind == 8) {
        clickNumbers(ind, val = 2);
    } else if (ind == 9) {
        clickNumbers(ind, val = 3);
    } else if (ind == 10) {
        clickNumbers(ind, val = 0);
    } else if (ind == 11) {
        clickNumbers(ind, val = '.');
    }
})

symbolsOperation.forEach(function(val, ind) {
    if (ind == 0) {
        symbolsOperation[ind].addEventListener('click', function() {
            console.log('reset button')
        })
    } else if (ind == 1) {
        symbolsOperation[ind].addEventListener('click', function() {
            console.log('percent button')
        })
    } else if (ind == 2) {
        symbolsOperation[ind].addEventListener('click', function() {
            calculateNumbers += '/'
            console.log(calculateNumbers)
        })
    } else if (ind == 3) {
        symbolsOperation[ind].addEventListener('click', function() {
            calculateNumbers += '*'
            console.log(calculateNumbers)
        })
    } else if (ind == 4) {
        symbolsOperation[ind].addEventListener('click', function() {
            calculateNumbers += '-'
            console.log(calculateNumbers)
        })
    } else if (ind == 5) {
        symbolsOperation[ind].addEventListener('click', function() {
            calculateNumbers += '+'
            console.log(calculateNumbers)
        })
    } else if (ind == 6) {
        symbolsOperation[ind].addEventListener('click', function() {
            console.log('equals button')
        })
    } else if (ind == 7) {
        symbolsOperation[ind].addEventListener('click', function() {
            console.log('plus and minus button')
        })
    }
})