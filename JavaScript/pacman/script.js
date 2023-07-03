// multi dimensional array to represent the rows of our map//
let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,2,0,2,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,0,0,0,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,0,0,0,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,0,0,0,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,1,1,1,2,1,1,2,2,2,2,1,1,2,0,0,0,2,1,1,2,2,2,2,1,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,1,1,1,1,1,1,1,2,0,0,0,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2],
    [2,1,2,2,2,2,1,1,1,1,1,1,1,1,2,0,0,0,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,0,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,1,1,2,0,2,2,2,2,2,2,2,2,2,0,2,1,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,1,1,2,0,0,0,0,0,0,0,0,0,0,0,2,1,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,1,1,2,2,2,2,2,2,0,2,2,2,2,2,2,1,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,1,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2],
    [2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]

let score = 0
document.querySelector('.current-score').innerText = score

// function to display the map based on the multi-dimensional array above //
function displayWorld(){
    let output = '';
    for(var i = 0; i < world.length; i++){
        output += '\n<div class="row">\n'
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2){
                output += '<div class="block"></div>'
            }
            else if(world[i][j] == 1){
                output += '<div class="coin"></div>'
            }
            else {
                output += '<div class="empty"></div>'
            }
        }
        output += '\n</div>'
    }
    document.getElementById('world').innerHTML = output;
}

// positional values for pacman//
var pacman = {
    x: 16,
    y: 16
}

var ghost = {
    red: {
        x: 16,
        y: 10
    },
}

//function to check x and y values for pacman and display with new parameters //
function displayPacman(){
    document.getElementById('pac-man').style.top = `${pacman.y * 20}px`
    document.getElementById('pac-man').style.left = `${pacman.x * 20}px`
}

function displayRedGhost(){
    document.getElementById('red-ghost').style.top = `${ghost.red.y * 20}px`
    document.getElementById('red-ghost').style.left = `${ghost.red.x * 20}px`
}

// function to use direction keys to move pacman //
document.onkeydown = function (e){
    if(e.key == 'ArrowUp'){
        if(world[pacman.y-1][pacman.x] == '2'){
            return
        }
        pacman.y-- 
        rotate('up')
    }
    if(e.key == 'ArrowRight'){
        if(world[pacman.y][pacman.x+1] == '2'){
            return
        }
        pacman.x++ 
        rotate('right')
    }
    if(e.key == 'ArrowDown'){
        if(world[pacman.y+1][pacman.x] == '2'){
            return
        }
        pacman.y++
        rotate('down')
    }
    if(e.key == 'ArrowLeft'){
        if(world[pacman.y][pacman.x-1] == '2'){
            return
        }
        pacman.x--
        rotate('left')
    }
    if(world[pacman.y][pacman.x] == '1'){
        world[pacman.y][pacman.x] = '0';
        score ++
        document.querySelector('.current-score').innerText = score
        displayWorld()
    }
    if(pacman.x == ghost.red.x && pacman.y == ghost.red.y){
        alert(`Game over. Your score was ${score}, refresh page to play again!`)
    }
    displayPacman()
}

var chaseIt = setInterval( function moveRedGhost(){
    if(world[ghost.red.y +1][ghost.red.x] != '2'){
        if(pacman.y > ghost.red.y){
            ghost.red.y++
        }
    }   
    if(world[ghost.red.y -1][ghost.red.x] != '2'){
        if(pacman.y < ghost.red.y){
            ghost.red.y--
        }
    }
    if(world[ghost.red.y][ghost.red.x +1] != '2'){
        if(pacman.x > ghost.red.x){
            ghost.red.x++
        }
    }
    if(world[ghost.red.y][ghost.red.x -1] != '2'){
        if(pacman.x < ghost.red.x){
            ghost.red.x--
        }
    }
    if(pacman.x == ghost.red.x && pacman.y == ghost.red.y){
        clearInterval(chaseIt)
        alert(`Game over. Your score was ${score}, refresh page to play again!`)
    }
    displayRedGhost() 
}, 750)


// function to rotate pacman based on the direction it is moving //
let pacmanDirection = ''
function rotate(direction){
    if(direction == pacmanDirection){
        return
    }
    else if(direction == 'up'){
        document.getElementById('pac-man').style.transform = `rotate(-90deg)`
        pacmanDirection = 'up'
    }
    else if(direction == 'right'){
        document.getElementById('pac-man').style.transform = `rotate(0deg)`
        pacmanDirection = 'right'
    }
    else if(direction == 'down'){
        document.getElementById('pac-man').style.transform = `rotate(90deg)`
        pacmanDirection = 'down'
    }
    else{
        document.getElementById('pac-man').style.transform = `rotate(180deg)`
        pacmanDirection = 'left'
    }
    
}


// List of functions to be called//
displayWorld()
displayPacman()
