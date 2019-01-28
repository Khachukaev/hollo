let num1 = '';
let num2 = '';
let midnum = '';
let operator = '';
let total = '';
$(document).ready(function() {
    $('button').on('click', function(e) {
        let btn = e.target.value;
        let display = $('.display');
        if (btn >= '0' && btn <= '9' && midnum.length <=8) {
            midnum +=btn;
            display.text(midnum);
        } else if (btn === '.' && midnum.length <=8) {
            midnum +=btn;
            display.text(midnum);
        } else if (btn === 'equals') {
            switch (operator) {
        case '+':
            total = +num1 + +midnum;
            display.text(total);
            break;
        case '-':
            total = +num1 - +midnum;
            display.text(total);
            break;
        case '/':
            total = +num1 / +midnum;
            display.text(total);
            break;
        case '*':
            total = +num1 * +midnum;
            display.text(total);
            break;
        }
        } else if (btn === 'clear'){
            num1 = '';
            midnum = '';
            operator = '';
            display.text('0');
        }
        else {
            num1 = midnum;
            midnum = '';
            operator = btn;
        }
        
        })
    
    });

