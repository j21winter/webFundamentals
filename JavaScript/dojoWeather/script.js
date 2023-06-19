console.log('running...')

function chooseCity(element){
    var city = element.innerText
    alert(`loading weather report...`)
}
function removeCookie(elementID){
    var cookieMessage = document.getElementById(elementID)
    cookieMessage.remove()
}

function convertToF(temp){
    var conversion = (1.8*temp + 32)
    var newTemp = Math.round(conversion)
    // console.log(newTemp)
    return newTemp
}

function convertToC(temp){
    var conversion = ((temp - 32) /1.8)
    var newTemp = Math.round(conversion)
    return newTemp
}

function changeUnit(choice){
    for(var i = 1 ; i <= 8 ; i++){
        var tempElement = document.querySelector('.temp' + i)
        var tempNum = parseInt(tempElement.innerText)
        if(choice.value == '°C'){
            tempElement.innerText = convertToC(tempNum) + '°'
        } else {
            tempElement.innerText = convertToF(tempNum) + '°'
        }
    }
}
