import Calculator from './chaining';

let calc = Calculator()
.add(10)
.add(9)
.add(1)
.multiply(100)
.divide(2)
.get();

console.log(calc);
