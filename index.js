// Write your code here!
// find and remove the main#main node
const main = document.querySelector('main#main');
main.remove();

// create a new header element with the text "YOUR-NAME is the champion"
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// add the new header element to the document
const body = document.querySelector('body');
body.appendChild(newHeader);
