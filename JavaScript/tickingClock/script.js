
let s = document.querySelector('.seconds')
let m = document.querySelector('.minutes')
let h = document.querySelector('.hours')
let center = document.querySelector('.center')

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + new Date().getMinutes() * 60 + new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    let sDegree = (time * 6) - 90
    let mDegree = (time * 0.1) -90
    let hDegree = (time * 0.0083) - 90
    s.style.transform = `rotate(${sDegree}deg)`
    m.style.transform = `rotate(${mDegree}deg)`
    h.style.transform = `rotate(${hDegree}deg)`

}, 1000);

setInterval( function(){
    center.innerText = new Date().getHours() +': '+ new Date().getMinutes() +': '+ new Date().getSeconds()
}, 1000);

