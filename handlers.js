import { getSum } from './mathutils.js';
const add1 = document.getElementById('add-input1');
const add2 = document.getElementById('add-input2');
const sumResults = document.getElementById('add-results');

export function addEventHandler(){
    const addField1 = add1.valueAsNumber;
    const addField2 = add2.valueAsNumber;
    const sum = getSum(addField1, addField2);
    sumResults.textContent = sum;
}


import { getSubtract } from './mathutils.js';
const subtractInput1 = document.getElementById('subtract-input1');
const subtractInput2 = document.getElementById('subtract-input2');
const subtractResults = document.getElementById('subtract-results');

export function subtractEventHandler(){
    const subInput1 = subtractInput1.valueAsNumber;
    const subInput2 = subtractInput2.valueAsNumber;
    const subtract = getSubtract(subInput1,subInput2);
    subtractResults.textContent = subtract;
}


import { getmultiply } from './mathutils.js';
const multiplyInput1 = document.getElementById('multiply-input1');
const multiplyInput2 = document.getElementById('multiply-input2');
const multiplyResults = document.getElementById('multiply-results');

export function multiplyEventHandler(){
    const subInput1 = multiplyInput1.valueAsNumber;
    const subInput2 = multiplyInput2.valueAsNumber;
    const subtract = getMultiply(multiplyInput1,multiplyInput2);
    multiplyResults.textContent = multiply;
}