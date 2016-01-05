describe('FizzBuzz', function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz()
  });

  it('prints Fizz if the number is divisible by 3', function() {
    expect(fizzbuzz.play(3)).toBe('Fizz');
  });

  it('prints Buzz if the number is divisible by 5', function() {
    expect(fizzbuzz.play(5)).toBe('Buzz');
  });

  it('prints FizzBuzz if the number is divisible by 3 and 5', function() {
    expect(fizzbuzz.play(15)).toBe('FizzBuzz');
  });

  it('just prints the number if it is not divisible by 3 or 5', function() {
    expect(fizzbuzz.play(7)).toBe(7);
  });
});
