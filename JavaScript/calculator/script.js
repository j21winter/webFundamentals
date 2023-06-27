let display = document.querySelector(".display");
let sum;
let inputNum;
let prevSymbol;
let equals = 0
let displayResult;


// rules & tying //
$('.num').click(function type(){
    if(display.innerText == 0){
        display.innerText = (this).innerText
        return
    }
    else if(display.innerText == displayResult){
        varReset()
        display.innerText = (this).innerText
        return
    }
    else{
        display.innerText = display.innerText + (this).innerText;
    }
})

$('.decimal').click(function type(){
    if((display.innerText.includes('.')) == true){
        return
    }
    display.innerText = display.innerText + (this).innerText;
})

$('.zero').click(function() {
    if(display.innerText == 0){
        display.innerText = 0;
    }
})

// clear //
$('.clear').click(function() {
    varReset()
    display.innerText = 0
})

// functionality //
function calculate(){
    if(inputNum == undefined){
        return sum
    }
    else if(prevSymbol == '÷'){
        sum = sum / inputNum
        return sum
    }
    else if(prevSymbol == '×'){
        sum = sum * inputNum
        return sum
    }
    else if(prevSymbol == '-'){
        sum = sum - inputNum
        return sum
    }
    else if(prevSymbol == '+'){
        sum = sum + inputNum
        return sum
    }
}

$('.symbol').click(function (){
    prevSymbol = (this).innerText
    if(equals > 0){
        display.innerText = 0
        equals = 0
        return
    }
    else if(sum == undefined){
        sum = parseInt(display.innerText)
        display.innerText = 0
        return
    } else if(inputNum == undefined){
        inputNum = parseInt(display.innerText)
        let result = calculate()
        sum = result
        inputNum = undefined
        display.innerText = 0
    }
})

$('.equals').click(function(){
    if(inputNum == undefined){
        inputNum = parseInt(display.innerText)
    }
    displayResult = calculate()
    display.innerText = displayResult
    equals ++
    inputNum = undefined
})

function varReset(){
    sum = undefined
    inputNum = undefined
    prevSymbol = undefined
    equals = 0
    displayResult = undefined
}