const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
if (temperatureInCelsius == 0) {
// debugger    
   alert('0 градусов по Цельсию - это температура замерзания воды') 
} else if (temperatureInCelsius >= 0) {
 // debugger  
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
if ( temperatureInCelsius * 9 / 5 + 32);
// debugger
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
