//? always hungry //

function alwaysHungry(arr) {
    for(var i = 0; i<arr.length; i++){
        var foodCount = 0
        if(arr[i] == 'food'){
            foodCount++
            console.log('yummy')
        }
    }
    if(foodCount == 0){
        console.log("I'm Hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//? high pass filter //

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i  = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//? better than average //

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    var avg = sum/arr.length
    var count = 0
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > avg){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//? Array reverse //

function reverse(arr) {
    for(var i = 0; i <= arr.length / 2 ; i++){
        var temp = arr[i]
        arr[i] = arr[arr.length - (1+i)]
        arr[arr.length - (1+i)] = temp
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//? Finonacci Array //

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length < n){
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
    }
//     for(var i = 0; fibArr.length < n ; i++)
//         fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
