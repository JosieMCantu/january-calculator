const add1 = document.getElementById('add-input1');
const add2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const sumResults = document.getElementById('add-results');

addButton.addEventListener('click', () => {
    const addField1 = add1.value;
    const addField2 = add2.value;
    const sum = Number(addField1) + Number(addField2);
    
    sumResults.textContent = sum;
});


const subtractInput1 = document.getElementById('subtract-input1');
const subtractInput2 = document.getElementById('subtract-input2');
const subtractButton = document.getElementById('subtract-button');
const subtractResults = document.getElementById('subtract-results');

subtractButton.addEventListener('click', () => {
    const subInput1 = subtractInput1.value;
    const subInput2 = subtractInput2.value;
    const subtract = Number(subInput1) - Number(subInput2);
    
    subtractResults.textContent = subtract;
});


const multiplyInput1 = document.getElementById('multiply-input1');
const multiplyInput2 = document.getElementById('multiply-input2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResults = document.getElementById('multiply-results');

multiplyButton.addEventListener('click', () => {
    const multiplyField1 = multiplyInput1.value;
    const multiplyField2 = multiplyInput2.value;
    const multiply = Number(multiplyField1) * Number(multiplyField2);
    
    multiplyResults.textContent = multiply;
});




// console.log('hi');

// const weWin = document.getElementById('we-win');
// const newButton = document.getElementById('newButton');
// const wordsChange = document.getElementById('words-change');

// newButton.addEventListener('click', () => {
    // newButton.style.color = 'red';
    // newButton.style.background = 'blue';
    // weWin.textContent = wordsChange.value;
// });
