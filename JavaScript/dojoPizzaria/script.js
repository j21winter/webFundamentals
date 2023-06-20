function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings
    return pizza
}

var testPizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage'])
console.log(testPizza1)

var testPizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions'])
console.log(testPizza2)

var testPizza3 = pizzaOven('thin', 'BBQ', 'cheeddar', ['spinach', 'bacon'])
console.log(testPizza3)

var testPizza4 = pizzaOven('flatbread', 'ranch', 'american','egg')
console.log(testPizza4)


// bonus - create a function that makes a random pizza //
function randomPizza(crustType, sauceType, cheeses, toppings){

}
