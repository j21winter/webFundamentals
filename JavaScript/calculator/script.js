let display = document.querySelector(".display");
let sum;
let inputNum;
let prevSymbol;



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
})


// symbols //
$('.symbol').click(function (){
    let symbol = (this).innerText
    prevSymbol = symbol
    if(sum == undefined){
        sum = parseInt(display.innerText)
        display.innerText = 0
        return
    } else {
        inputNum = parseInt(display.innerText)
        }
    display.innerText = 0
    calculate(symbol)
    })

    function calculate(symbol){
        if(symbol == '÷'){
            divide(sum, inputNum)
        }
        else if(symbol == '×'){
            multiply(sum, inputNum)
        }
        else if(symbol == '-'){
            subtract(sum, inputNum)
        }
        else{
            sum = add(sum, inputNum)
        }
        return sum
    }



    function divide(total, newNum){
        total = total / newNum
        return total
    }
    
    function multiply(total, newNum){
        total = total * newNum
        return total
    }
    
    function add(total, newNum){
        total = total + newNum
        return total
    }
    
    function subtract(total, newNum){
        total = total - newNum
        return total

    }

// equals // 
$('.equals').click(function (){
    inputNum = parseInt(display.innerText)
    let result = calculate(prevSymbol)
    display.innerText = result
    inputNum = 0
})
