 //DOM manipulation
/*
5 ways

getElementById()
getElementByClassName()
getElementByTagName()
querySelector()- selects the first id/element/class that matches
querySelectorAll()- selects all that matches

*/
//Styling an element

const title=document.getElementById("main-heading");

title.style.color='red';//inline styling // this works only for single element , same wont work for list items as shown below

//console.log(title); adds the style in line

const listItem=document.querySelectorAll('.list-items');
//console.log(listItem);
//listItem.style.fontSize='5rem'; //will throw type error as it cant add css styling inline to all list items.
//how to apply ?
// loop thru each list item and apply

for(i=0;i<listItem.length;i++){
    listItem[i].style.fontSize='3rem';
}

// creating elements
const ul=document.querySelector('ul');
const lim=document.createElement('li');

//adding element

ul.append(lim);

//modifying the text 

const firstItem=document.querySelector('.list-items');
//below 3 lines give different o/p observe
console.log(firstItem.innerText);
console.log(firstItem.textContent);
console.log(firstItem.innerHTML);// this can cause security issues

//modifying text starts

lim.innerText='Geometry box';

// modifying attributes and  classes- setAttribute,removeAttribute,

lim.setAttribute('id','main-heading'); // #main-heading style is applied to lim
lim.removeAttribute('id');//above styling is gone

const pitle=document.getElementById('main-heading');
console.log(pitle.getAttribute('id'));

lim.classList.add('list-items');
lim.classList.remove('list-items');

console.log(lim.classList.contains('list-items')) //false

//to remove an element

lim.remove();

//Manipulation basicsend here.

//TRAVERSING THE DOM

///Parent Node traversal

let ul_tag =document.querySelector('ul');
console.log(ul_tag.parentElement);
console.log(ul_tag.parentNode);
console.log(ul_tag.parentElement.parentElement);
console.log(ul_tag.parentNode.parentElement);

const htmlx= document.documentElement;
console.log(htmlx);
console.log(htmlx.parentElement);//null
console.log(htmlx.parentNode);//#document(http://127.0.0.1:5500/) we use this usually


//child node traversal
//let ul_tag =document.querySelector('ul');

console.log(ul_tag.childNodes);// it will consider the indentation between the elements in the DOM tree as text nodes //nodelist(11)

console.log(ul_tag.firstChild);//#text

console.log(ul_tag.lastChild);//#text

ul_tag.childNodes[1].style.backgroundColor='red';

console.log(ul_tag.children);
console.log(ul_tag.firstElementChild);
console.log(ul_tag.lastElementChild); 

//sibling node traversal
//let ul_tag =document.querySelector('ul');

const div=document.querySelector('div');

console.log(div.children);//HTMLCollection(2)0:h1, 1:ul
console.log(ul_tag.previousElementSibling); //<h1><\h1>
console.log(ul_tag.nextElementSibling);//null


console.log(div.childNodes);//0:text 1:h1 2:text 3: comment 4:text 5:u1 6:text
console.log(ul_tag.previousSibling); //#text
console.log(ul_tag.nextSibling);//#text


