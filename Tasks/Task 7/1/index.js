let name = 'Diomid';
console.log(String(name), Boolean(name), Number(name));
let age = 32;
console.log(Number(age), Boolean(age), String(age));
let IceCoffee;
console.log(Boolean(IceCoffee), Number(IceCoffee), String(IceCoffee));
let Student = null;
console.log(String(Student), Boolean(Student), Number(Student));
let myCar = undefined;
console.log(String(myCar), Boolean(myCar), Number(myCar));
let drink = {
    Diomid: 'Chai',
    Olga: 'Coctil',
    Gleb: 'water',
}
console.log(String(drink), Boolean(drink), Number(drink));
let id = Symbol('a');
console.log(String(id), Boolean(id));
let bigIntNumber = 500n;
console.log(String(bigIntNumber), Boolean(bigIntNumber), Number(bigIntNumber));