function FizzBuzz() {}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleby(number, 15)) {
    return 'FizzBuzz';
  }
  if (this._isDivisibleby(number, 3)) {
    return 'Fizz';
  }
  if (this._isDivisibleby(number, 5)) {
    return 'Buzz';
  }
  return number;
};

FizzBuzz.prototype._isDivisibleby = function(number, divisor) {
   return number % divisor === 0;
};
