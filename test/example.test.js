// IMPORT MODULES under test here:
import { getSum, getSubtract, getMultiply } from '../mathutils.js';

const test = QUnit.test;

test('it should return 2 when provided 1 and 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(1,1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 10 when provided 4 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(4,6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('it should return 2 when provided 6 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSubtract(6,4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 6 when provided 12 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSubtract(12,6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('it should return 18 when provided 3 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 18;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMultiply(3,6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return 12 when provided 4 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMultiply(4,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});