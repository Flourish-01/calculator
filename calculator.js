let display = document.getElementById('display');
let displayTwo = document.getElementById('displayTwo');

function toggleCalculator() {
    clearDisplay();
    displayTwo.style.display = 'block';
    display.style.display = 'none';
}

function turnOnCalculator() {
    clearDisplay();
    displayTwo.style.display = 'none';
    display.style.display = 'block';
}

function appendToDisplay(input) {
    display.value += input;
}

function backSpace() {
    let currentValue = display.value;
    display.value = currentValue.substring(0, currentValue.length - 1);
}

function squareRoot() {
    let inputValue = parseFloat(display.value);
    if (inputValue >= 0) {
        display.value = Math.sqrt(inputValue);
    } else {
        display.value = 'Invalid Input';
    }
}

function appendToDisplaying(input) {
    display.value += input;
}

function raiseToPower() {
    display.value += '^';
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = 'Error';
    }
}



// let current = '';
// let calculator = '';
// let previous = '';

// function digit(num) {
//     current += num;
//     display.value = current;
// }

// function operation(sign) {
//     if (current === '') return;
//     if (previous !== '') {
//         calcResult();
//     } else {
//         previous = current;
//     }
//     calculator = sign;
//     current = '';
//     display.value = previous + ' ' + sign + ' ';
// }

// function calcResult() {
//     let final;
//     let prev = parseFloat(previous);
//     let curry = parseFloat(current);



//     switch (calculator) {
//         case '+':
//             final = prev + curry;
//             break;
//         case '-':
//             final = prev - curry;
//             break;
//         case '*':
//             final = prev * curry;
//             break;
//         case '/':
//             if (curry == 0) {
//                 alert('Cannot divide by zero');
//                 Clear();
//                 return;
//             }
//             final = prev / curry;
//             break;
     
            
//         default:
//             break;
//     }

//     display.value = final;
//     previous = final.toString();
//     current = '';
// }

// function percent(para){   
//     para = current / 100
//     current += para
    
//     display.value = current    
// }
// function Clear() {
//     current = '';
//     previous = '';
//     calculator = '';
//     display.value = '';
// }
