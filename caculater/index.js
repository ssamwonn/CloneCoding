const numberInput = document.querySelector('#input'),
    plus_Btn = document.querySelector('#plus'),
    minus_Btn = document.querySelector('#minus'),
    divide_Btn = document.querySelector('#divide'),
    multiple_Btn = document.querySelector('#multiple'),
    clear_Btn = document.querySelector('#clear'),
    calculate_Btn = document.querySelector('#calculate'),
    resultInput = document.querySelector('#result');

let temp;
let operator;

plus_Btn.addEventListener('click', () => {
    if (temp) {
        operator = '+'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value)
            numberInput.value = null
            resultInput.value = null
        }
    }
})
minus_Btn.addEventListener('click', () => {
    if (temp) {
        operator = '-'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value)
            numberInput.value = null
            resultInput.value = null
        }
    }
})

multiple_Btn.addEventListener('click', () => {
    if (temp) {
        operator = '*'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value)
            numberInput.value = null
            resultInput.value = null
        }
    }
})

divide_Btn.addEventListener('click', () => {
    if (temp) {
        operator = '/'
        numberInput.value = null
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value)
            numberInput.value = null
            resultInput.value = null
        }
    }
})




clear_Btn.addEventListener('click', () => {
    resultInput.value = null
    numberInput.value = null
    temp = null
    operator = null

})


calculate_Btn.addEventListener('click', () => {    //계산하는 식 
    console.log(temp, operator, numberInput.value)
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
            }
            temp = Number(resultInput.value);
        }
    } else {
        if (numberInput.value) {
            resultInput.value = temp
        }
    }
})

