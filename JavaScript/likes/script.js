//? test idea worked with one function
// var likeCount = 0

// function addLikes(likes) {
//     likeCount += 1
//     var likes = document.querySelector('.likes')
//     if(likeCount == 1){
//         likes.innerText = likeCount + " Like"
//     } else {
//     likes.innerText = likeCount + " Likes"}
// }

//? test idea

// function addLikes(){
//     // console.log(document.querySelector('#like-number'.)innerText)
//     var currentLikes = document.querySelector('.like-number').innerText
//     // console.log(currentLikes)
//     var likesNum = parseInt(currentLikes)
//     document.querySelector('.like-number').innerText = likesNum += 1
// }

//? test idea
// function addLikes (button){
//     var currentLikes = 
//     console.log(currentLikes)
// }

//! actual Function

function addLikes(studentLikes){
    var likeCountElement = document.querySelector(studentLikes)
    var likeNum = parseInt(likeCountElement.innerText)
    document.querySelector(studentLikes).innerText = likeNum + 1

}