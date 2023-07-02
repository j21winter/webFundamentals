// multi dimensional array to represent the rows of our map//
let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,1,1,2,1,2,2,1,2],
    [2,1,1,1,1,2,1,1,2,2,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,1,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2],
    [2,1,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,1,1,2,0,2,2,2,2,0,2,2,2,2,0,2,1,1,2,2,1,1,2,2,1,2],
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

//function to check x and y values for pacman and display with new parameters //
function displayPacman(){
    document.getElementById('pac-man').style.top = `${pacman.y * 20}px`
    document.getElementById('pac-man').style.left = `${pacman.x * 20}px`
}

// function to use direction keys to move pacman //
document.onkeydown = function (e){
    if(e.key == 'ArrowUp'){
        pacman.y-- 
        rotate('up')
    }
    if(e.key == 'ArrowRight'){
        pacman.x++ 
        rotate('right')
    }
    if(e.key == 'ArrowDown'){
        pacman.y++
        rotate('down')
    }
    if(e.key == 'ArrowLeft'){
        pacman.x--
        rotate('left')
    }
    if(world[pacman.y][pacman.x] == '1'){
        world[pacman.y][pacman.x] = '0';
        score ++
        document.querySelector('.current-score').innerText = score
        displayWorld()
    }
    displayPacman()
}

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

