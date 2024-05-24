/* DOM manipulation

5 ways

getElementById()
getElementByClassName()
getElementByTagName()
querySelector()- selects the first id/element/class that matches
querySelectorAll()- selects all that matches

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
*/
// creating elements
const ul=document.querySelector('ul');
const lim=document.createElement('li');

//adding element

ul.append(lim);

//modifying the text 

const firstItem=document.querySelector('.list-items');
//below 3 lines give different o/p observe
//console.log(firstItem.innerText);
//console.log(firstItem.textContent);
//console.log(firstItem.innerHTML);// this can cause security issues

//modifying text starts

lim.innerText='Geometry box';

// modifying attributes and  classes- setAttribute,removeAttribute,

//lim.setAttribute('id','main-heading'); // #main-heading style is applied to lim
//lim.removeAttribute('id');//above styling is gone

//const pitle=document.getElementById('main-heading');
//console.log(pitle.getAttribute('id'));

