var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.add(1);
    calculator.operatorClick("+")
    calculator.add(4);
    assert.equal(5, calculator.runningTotal)
  })

  it('it can subtract', function(){
    calculator.add(7);
    calculator.operatorClick("-")
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal)
  })

  it('it can multiply', function(){
    calculator.add(3);
    calculator.operatorClick("*")
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal)
  })

  it('it can divide', function(){
    calculator.add(21);
    calculator.operatorClick("/")
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal)
  })


  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(9);
    calculator.numberClick(9);
    calculator.numberClick(9);

    assert.equal(999, calculator.runningTotal)
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(21);
    calculator.operatorClick("/")
    calculator.numberClick(7);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(15, calculator.runningTotal)
  })

  it('it can clear the running total without affecting the calculation', function(){
    calculator.numberClick(21);
    calculator.operatorClick("/")
    calculator.numberClick(7);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(10);
    calculator.operatorClick("=");
    assert.equal(30, calculator.runningTotal)
  })

});
