
import { addEventHandler } from './handlers.js'; 
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addEventHandler);

import { subtractEventHandler } from './handlers.js';
const subtractButton = document.getElementById('subtract-button');
subtractButton.addEventListener('click', subtractEventHandler);

import { multiplyEventHandler } from './handlers.js';
const multiplyButton = document.getElementById('multiply-button');
multiplyButton.addEventListener('click', multiplyEventHandler);
