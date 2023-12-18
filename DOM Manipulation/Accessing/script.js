const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children); // HTMLCollection

// console.log(parent.children[2]);
parent.children[2].style.backgroundColor = 'green';

const firstChild = parent.firstElementChild; // Returns HTMLElement
const lastChild = parent.lastChild
console.log(firstChild); 
console.log(lastChild); 

// // Accessing Parent from Child
// console.log(firstChild.parentNode);
// console.log(firstChild.parentElement);

// // Accessing Siblings
// console.log(firstChild.nextElementSibling.innerHTML);

// Nodes

console.log('Nodes ', parent.childNodes); // NodeList:  All the child Nodes including Element, Text and Comment Nodes
console.log('Element Nodes ', parent.children); // HTMLCollection