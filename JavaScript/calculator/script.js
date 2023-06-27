// variable for my display location. This allows me to target the HTML element, when used with .innerText we can change the text being shown//
let display = document.querySelector(".display");
// sum will be our variable to hold our running total throughout the calculation. It will be the first variable defined//
let sum;
// inputNum will serve as our second number in a 2 number calculation, this will be constantly set, used and reset to effect sum //
let inputNum;
// prevSymbol will be used to record the previous symbol clicked, it will also be used to inform the calculate function which equation to use, it will be redefined each time a symbol is pressed//
let prevSymbol;
//this number will bounce between 0 and 1. It is increased when the equals button is pressed. the number will inform our symbols click, and allow the used to continue in a calculation after hitting the equals button//
let equals = 0
// display result will be set when we hit the equals button and will be used to display a result in the display of our calculator. it will also inform our typing, and stop us concatenating onto our result when we begin to type again// 
let displayResult;

//typing numbers //
$('.num').click(function type(){
    //? If I am starting from scratch I do not want to concatenate text//
    if(display.innerText == 0){
        display.innerText = (this).innerText
        return
    }
    //? If a result is currently on display, I do not want to concatenate onto the result with new text //
    else if(display.innerText == displayResult){
        //? let the system know we are starting a new calculation //
        varReset()
        //? replace the result on display with my new input //
        display.innerText = (this).innerText
        //? end the function here //
        return
    }

    else{
        //? concatenate my input text //
        display.innerText = display.innerText + (this).innerText;
    }
})

//typing decimal point //
$('.decimal').click(function type(){
    //? We cannot allow x2 decimal points in the same line of text //
    if((display.innerText.includes('.')) == true){
        //? do not type and end function //
        return
    }
    //? if there is no decimal place, concatenate the decimal point //
    display.innerText = display.innerText + (this).innerText;
})

//typing zero//
$('.zero').click(function() {
    //? cannot concatenate 0 onto another 0 if we are starting at 0 //
    if(display.innerText == 0){
        //? just print 0 //
        display.innerText = 0;
    }
})

// clear //
$('.clear').click(function() {
    //? reset all variables back to their resting state, ready to accept a new input //
    varReset()
    //? display 0 to show that it is ready for a new input //
    display.innerText = 0
})

// using symbols //
$('.symbol').click(function (){
    //? record the symbol that was pressed //
    prevSymbol = (this).innerText
    //? equals will be increased when equals symbol is pressed meaning we will be showing displayResult, in this case we will want to add more calculations into our existing result // 
    //! could I maybe use if(display.innerText == displayResult)
    if(equals > 0){
        //? show 0 to accept new text //
        display.innerText = 0
        //? reset equals var to allow for new calculation call //
        equals = 0
        //? end function //
        return
    }
    //? this will be the first number input when starting a brand new calculation, first we must define sum//
    else if(sum == undefined){
        //? turn input text into a number data type and sum equal to the number//
        sum = parseInt(display.innerText)
        //? display 0 to show we are ready for a new input //
        display.innerText = 0
        //? end function here//
        return
    //? this would be the second number we need to define before we can use calculate //
    } else if(inputNum == undefined){
        //? set inputNum equal to the input text as a number type//
        inputNum = parseInt(display.innerText)
        //? call function calculate to run out specific calculation and set sum to the returned value //
        sum = calculate()
        //? reset inputNum to undefined so we can accept future values //
        inputNum = undefined
        //?reset inner text to accept new values //
        display.innerText = 0
    }
})

// using equals //
$('.equals').click(function(){
    //? if we hit equals after typing our second number we will need to define inputNum as that value before we move forward //
    if(inputNum == undefined){
        //? set inputNum equal to the inner text value in number datatype form.//
        inputNum = parseInt(display.innerText)
    }
    //? run calculation and set variable dislpayResult equal to the returned value //
    //! could maybe set sum = to calculate()
    displayResult = calculate()
    //? show the result in the display //
    //! display.innerText = sum
    display.innerText = displayResult
    //? increase the equals variable so to inform symbol click conditional //
    equals ++
    //? reset inputNum variable to allow for future input //
    inputNum = undefined
})

// Utility functions //
//? run a calculation //
function calculate(){
    //?incase the equals button is pressed without filling all required variables//
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

//? reset all variables //
function varReset(){
    sum = undefined
    inputNum = undefined
    prevSymbol = undefined
    equals = 0
    displayResult = undefined
}
