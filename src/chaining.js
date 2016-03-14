const Calculator = (sum = 0) => {

  const obj = {
    add(n) {
      sum += n;
      return this;
    },

    subtract(n) {
      sum -= n;
      return this;
    },

    multiply(n) {
      sum *= n;
      return this;
    },

    divide(n) {
      sum /= n;
      return this;
    },

    get(callback) {
      if(callback) {
        return callback(sum);
      }
      return sum;
    }
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
