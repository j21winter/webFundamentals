//? show edit profile form //

function editProfile(){
    var button = document.querySelector('.edit-profile') //create button variable//
    button.classList.add('hidden') // add the hidden css class to it (display:none)//
    var form = document.querySelector('.edit-profile-form') //create form variable//
    form.classList.remove('hidden') //remove the hidden class from it//
}


//? replace name and location with input name and location //

function submitProfileChanges() {
    var newName = document.querySelector('#edit-name').value // create variable newName from input value//
    var newLocation = document.querySelector('#edit-location').value //create variable newLocation from input variable//
    document.querySelector('.user-name h1').innerText = newName //target the name text and replace it with new variable value//
    document.querySelector('.location p').innerText = newLocation //target the location text and replace it with new variable value//
    var button = document.querySelector('.edit-profile') //create button variable//
    button.classList.remove('hidden') // add the hidden css class to it (display:none)//
    var form = document.querySelector('.edit-profile-form') //create form variable//
    form.classList.add('hidden') //remove the hidden class from it//
}


//? any button in request row removes the request row from user requests//
function removeRequest(element){
    var row =  document.querySelector(element)
    row.remove()
}


//? request counter adjustment //

var requestConnectionCounter = 2 // setting a variable so that the request counter is always displaying the correct amount//

function requestCountReduce(){
    requestConnectionCounter -= 1 // adjust counter by removing 1//
    document.querySelector('#connection-request-header p').innerText = requestConnectionCounter // replace my existing text with the new value of counter//
}


//? Approve Request Button - connection counter adjustment //
var yourConnectionCounter = 300 // setting a variable so that the request counter is always displaying the correct amount//

function approveRequest(){
    yourConnectionCounter += 1 // adjust by adding 1 because we added a new connection //
    document.querySelector('.your-connections-icon').innerText = yourConnectionCounter // set that number on the page to display our new counter number//
}


//? create a new row in our connection requests//

// function newConnection(button){
//     var templateRow = document.querySelector('.connection-row')
//     var newRow = templateRow.cloneNode(true)
//     var requestUser = button.parentElement.previousElementSibling
//     var picture = requestUser.querySelector('.request-user .other-user-icon').src
//     var name = requestUser.parentElement.querySelector('.request-user .other-user-name').innerText
//     newRow.querySelector('.other-user-icon').src = picture
//     newRow.querySelector('.other-user-name').innerText = name
//     var connectionBody = document.querySelector('.connection-body')
//     connectionBody.appendChild(newRow)
// }
// function newConnection(userRow){
//     var templateRow = document.querySelector('.connection-row')
//     var newRow = templateRow.cloneNode(true)
//     var requestUser = document.querySelector(userRow)
//     var requestUserImgElement = requestUser.querySelector('img')
//     var requestUserName = requestUser.querySelector('p').innerText
//     newRow.querySelector('img') = requestUserImgElement
//     newRow.querySelector('p').innerText = requestUserName
// }