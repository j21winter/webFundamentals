function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza
}

var testPizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage'])
console.log('test pizza 1:')
console.log(testPizza1)

var testPizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions'])
console.log('test pizza 2:')
console.log(testPizza2)

var testPizza3 = pizzaOven('thin', 'BBQ', 'cheddar', ['spinach', 'bacon'])
console.log('test pizza 3:')
console.log(testPizza3)

var testPizza4 = pizzaOven('flatbread', 'ranch', 'american','egg')
console.log('test pizza 4:')
console.log(testPizza4)


//! bonus - create a function that makes a random pizza //
//crust types  //
var crustType = [
    'stuffed crust',
    'cracker crust',
    'flatbread crust',
    'thin crust',
    'cheese crust',
    'thick crust',
    'gluten free',
    'vegan-friendly'
]

// sauce types  & random sauce //
var sauceType = [
    'marinara sauce',
    'spicy red sauce',
    'buffalo sauce',
    'alfredo sauce',
    'pesto sauce',
    'chocolate sauce',
    'pepper sauce',
    'sweet sauce',
]

// cheese types //
var cheeseType = [
    'mozzarella',
    'provolone',
    'cheddar',
    'parmesan',
    'gouda',
    'goat',
    'gruyere',
    'ricotta',
    'gorgonzola'
]

// topping options //
var toppings = [
    'pepperoni',
    'mushrooms',
    'onions',
    'sausage',
    'bacon',
    'black olives',
    'green peppers',
    'pineapple',
    'spinach'
]


function chooseRandomItem(arr){
    var randomIndex = Math.floor(Math.random() * (arr.length))
    return arr[randomIndex]
    }

function howMany(arr){
    var choiceAmount = Math.floor(Math.random() * (arr.length) + 1)
    var choiceList = []
    var randomNumberList = []
    for(var i = choiceAmount; i > 0; i--){
        var num = Math.floor(Math.random() * (arr.length))
        if(randomNumberList.includes(num)){
            choiceAmount++
        }else{
            randomNumberList.push(num)
            choiceList.push(arr[num])
        }
        
    }
    return choiceList
}
    
function randomPizza(){
    var pizza = {}
    pizza.crustType = chooseRandomItem(crustType)
    pizza.sauceType = chooseRandomItem(sauceType)
    pizza.cheeses = howMany(cheeseType)
    pizza.toppings = howMany(toppings)
    return pizza
    }

console.group('random pizza: ')
console.log(randomPizza())