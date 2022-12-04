const cafe = [
    {coffees: 'Latte', prices: 1.5},
    {coffees: 'Cappuccino', prices: 1},
    {coffees: 'Americano', prices: 2},
];
const updatedPrices = cafe.map(cafe => `Кофе ${cafe.coffees} сейчас стоит (${cafe.prices + 0.5}) евро`);
alert(updatedPrices);