let display = document.querySelector(".display");
let sum;
let inputNum;
let prevSymbol;
let equals = 0

// rules & tying //
$('.num').click(function type(){
    if(display.innerText == 0){
        display.innerText = (this).innerText
        return
    }
    display.innerText = display.innerText + (this).innerText;
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
    console.log('clicked = ' + (this).innerText)
    display.innerText = 0;
    sum = undefined;
    inputNum = undefined
    prevSymbol = undefined
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
    console.log(prevSymbol)
    if(equals > 0){
        display.innerText = 0
        equals = 0
        return
    }
    else if(sum == undefined){
        sum = parseInt(display.innerText)
        display.innerText = 0
        console.log(`sum is ${sum}`)
        return
    } else if(inputNum == undefined){
        inputNum = parseInt(display.innerText)
        console.log(`inputNum is ${inputNum}`)
    }
    else {
        display.innerText = 0
        return
    }
    console.log('seen')
    let result = calculate()
    display.innerText = result
})

$('.equals').click(function(){
    if(inputNum == undefined){
        inputNum = parseInt(display.innerText)
    }
    console.log('equals clicked')
    console.log(sum, prevSymbol, inputNum)
    let result = calculate()
    console.log(result)
    display.innerText = result
    equals ++
    inputNum = undefined
})

function varReset(){
    inputNum = 0
    prevSymbol = undefined
}