const numberInput = document.querySelector('#input'),
    clear_Btn = document.querySelector('#clear'),
    plus_Btn = document.querySelector('#plus'),
    minus_Btn = document.querySelector('#minus'),
    divide_Btn = document.querySelector('#divide'),
    multiple_Btn = document.querySelector('#multiple'),
    calculate_Btn = document.querySelector('#calculate'),
    resultInput = document.querySelector('#result');


let temp;
let operator;

plus_Btn.addEventListener('click', () => {
    if (numberInput.value) {
        temp = Number(numberInput.value)
        operator = '+'
        numberInput.value = null
    }
})


clear_Btn.addEventListener('click', () => {
    numberInput.value = null;
    temp = null;
    operator = null;
})

calculate_Btn.addEventListener('click', () => {    //계산하는 식 
    if (operator) {
        if (numberInput.value) {
            if (operator === '+') {
                resultInput.value = temp + Number(numberInput.value)
            } else if (operator === '-') {
                resultInput.value = temp - Number(numberInput.value)
            } else if (operator === '*') {
                resultInput.value = temp * Number(numberInput.value)
            } else if (operator === '/') {
                resultInput.value = temp / Number(numberInput.value)
            } else {

            }
        }
    } else {
        if (numberInput.value) {
            resultInput.value = temp
        }
    }
})

