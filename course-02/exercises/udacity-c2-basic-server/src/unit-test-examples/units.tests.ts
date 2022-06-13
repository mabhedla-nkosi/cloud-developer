import { add, divide, concat } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    //const divideResults=divide(5,0);
    //expect(divideResults).to.throw('div by 0');
    expect(()=>{ divide(5,0) }).to.throw('div by 0');
  });

});

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
describe('concat',()=>{
  it('should concat two strings',()=>{
    const stringResult=concat("Nkosi", "Mlambo");
    expect(stringResult).to.equal("Nkosi Mlambo");
  });

  it('should output an error for an empty string',()=>{
    //const stringResult1=concat("Thobile","");
    expect(()=>{concat("Thobile","")}).to.throw('Both strings should not be empty');
  });

  it('should output an error for an empty string',()=>{
    //const stringResult2=concat("Thobile",null);
    expect(()=>{concat("Thobile",null)}).to.throw('Both strings should not be empty');
  });
})
