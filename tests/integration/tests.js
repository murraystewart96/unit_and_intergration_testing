const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


  it('number buttons should update the display of the running total', function(){

    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    running_total = element(by.css('#running_total'));
    expect(running_total.getAttribute('value')).to.eventually.equal('23')
  })


  it('should Do the arithmetical operations update the display with the result of the operation', function(){
    running_total = element(by.css('#running_total'))

    element(by.css('#number2')).click();
    element(by.id("operator_multiply")).click();
    element(by.css('#number7')).click();
    element(by.id("operator_equals")).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('14')
  })


  it('Can do multiple operations be chained together', function(){
    running_total = element(by.css('#running_total'))

    element(by.css('#number2')).click();
    element(by.id("operator_multiply")).click();
    element(by.css('#number8')).click();
    element(by.id("operator_divide")).click();
    element(by.css('#number4')).click();
    element(by.id("operator_equals")).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })


  it('Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers', function(){
    running_total = element(by.css('#running_total'))

    element(by.css('#number2')).click();
    element(by.id("operator_subtract")).click();
    element(by.css('#number5')).click();
    element(by.id("operator_equals")).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3')


    element(by.css('#number2')).click();
    element(by.id("operator_subtract")).click();
    element(by.css('#number5')).click();
    element(by.id("operator_add")).click();
    element(by.css('#number9')).click();
    element(by.id("operator_equals")).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')

    element(by.css('#number9')).click();
    element(by.id("operator_divide")).click();
    element(by.css('#number4')).click();
    element(by.id("operator_equals")).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2.25')


    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();

    element(by.id("operator_multiply")).click();
    element(by.id("operator_multiply")).click();
    element(by.id("operator_multiply")).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('1e+24')
  })


  it('cant divide by zero', function(){
    running_total = element(by.css('#running_total'))

    element(by.css('#number2')).click();
    element(by.id("operator_divide")).click();
    element(by.css('#number0')).click();
    element(by.id("operator_equals")).click();

    expect(running_total.getAttribute('value')).to.eventually.equal("Error! Can't divide by zero.")
  })

});
