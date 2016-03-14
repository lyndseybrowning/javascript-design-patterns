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

export default Calculator;
