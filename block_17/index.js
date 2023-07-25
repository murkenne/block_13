const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu
const coffeeData = require('/coffe_data')
//print all drinks names
const printDrink = (drink) => {
    return drink.name;
}
console.log(coffeeMenu.map(printDrink));
//Print an array of drinks that cost 5 and under
const evenPrice= (change) => {
    return change.price <=5;
}
const changeEvenPrice= coffeeMenu.filter(evenPrice);
console.table(changeEvenPrice);
//Print an array of drinks that are priced at an even number.
coffeeData.sort ((coffee) => {
    if (coffee.price % 2===0){
        console.log((coffee.name))
    }
})
//Print the total if you were to order one of every drink.
const sumOfAll = coffeeMenu.length;
const priceTotal= totalPrice +sumOfAll;
console.log(sumOfAll)

//print an array of drinks that are seasonal
coffeeData.filter ((coffee, seasonal)

)
