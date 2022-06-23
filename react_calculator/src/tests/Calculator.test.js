import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should sums numbers', () => {
    const button1 = container.find('#number1');
    const buttonAdd = container.find('#operator-add');
    const button4 = container.find('#number4');
    const buttonEquals = container.find('#operator-equals');
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtracts numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiplies numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divides numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button4 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button4 = container.find('#number4');
    button4.simulate('click');
    button4.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('44');
  })
  
  it('should chain multiple operations together', () => {
    const button4 = container.find('#number4');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonMinus = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button4.simulate('click');
    buttonMultiply.simulate('click');
    button4.simulate('click');
    buttonMinus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('12');
  })

})
