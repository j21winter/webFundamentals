function loginLogoff(element) {
    if(element.innerText == "Login"){
        element.innerText = "Logoff"
    }
    else if(element.innerText == "Logoff"){
        element.innerText = "Login"
    }
}
// function likeCounter(element){
//     element += 1
// }
function remove(element){
    element.remove()
}