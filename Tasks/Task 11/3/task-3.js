function getDivisorsCount(n){
    if (isNaN(n) && typeof (n) !== "n") { 
        return NaN;
      }
      let sum = 0;
      for(let i = 0; i <= n; i++){
        alert(`${sum} 'должен быть целым числом и больше нуля!'`);
        sum += i;
      }
}
console.log(getDivisorsCount(5));

