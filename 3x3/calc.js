var el = function(element) {
    if (element.charAt(0) === "#") { 
      return document.querySelector(element); 
    }
    return document.querySelectorAll(element);
  };

let display = el('#display'),
    equals = el('#equals'),
    num1 = '',
    num2 = '',
    nums = el('.num'),
    operator = el('.ops'),
    result = '',
    total = '',
    max = 9;

let setNum = function() {
    if (result) {
        num2 = this.getAttribute('value');
        result = '';
    } else {
        num2 += this.getAttribute('value');
    }
    
 display.innerHTML = num2;
    
};

let moveNum = function() {
    num1 = num2;
    num2 = '';
    operator = this.getAttribute('value');
    
    equals.setAttribute('value', '');
};

let displayNum = function () {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num2;
            break;
    }
    
 if(!isFinite(result)) {
     if (isNaN(result)) {
         result = 'Daymn man, u broke dat shiet';
     } else {
         result = 'It is not allowed to divide by zero, dumb ass nigga';
     }
 }
    
let maxNum = result.toString().length;
    
    if (maxNum > max) {
        $('.display').css('font-size', '1.5em');
        console.log(maxNum);
    } else {
        $('.display').css('font-size', '52px');
    }
    
 display.innerHTML = result;
 equals.setAttribute('value', result);

 num1 = 0;
 num2 = result;
    
};

let clearAll = function() {
    num1 = '';
    num2 = '';
    display.innerHTML = '0';
    equals.setAttribute('value', result);
    $('.display').css('font-size', '52px');
};

for (let i = 0; i < nums.length; i++) {
    nums[i].onclick = setNum;
}

for (let i = 0; i < operator.length; i++) {
    operator[i].onclick = moveNum;
}

equals.onclick = displayNum;

el('#clear').onclick = clearAll;

