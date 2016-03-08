const Calculator = (sum = 0) => {

  const obj = Object.create(null);

  obj.add = function(n) {
    sum += n;
    return this;
  };

  obj.subtract = function(n) {
    sum -= n;
    return this;
  };

  obj.multiply = function(n) {
    sum *= n;
    return this;
  };

  obj.divide = function(n) {
    sum /= n;
    return this;
  }

  obj.get = (callback) => {
    if(callback) {
      return callback(sum);
    }
    return sum;
  };

  return obj;
};

let calc = Calculator()
.add(10)
.add(9)
.add(1)
.multiply(100)
.divide(2)
.get();

console.log(calc);
