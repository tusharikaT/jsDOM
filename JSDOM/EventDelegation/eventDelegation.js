//based on event bubbling
/*
document.querySelector('#category').addEventListener('click',(e)=>{
console.log(e.target.id);
if(e.target.tagName=='LI'){
window.location.href="/"+e.target.id;
}
});
*/

document.querySelector('#form').addEventListener("keyup",(e)=>{
   // console.log(e);
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})

/*

Advantages:

single event handler, instead of using a lot of event handlers, improves memory

writing less code

DOM manipulation easy - when an addl element is added , we dont specifically go and attach an event listener.

Disadvantages: 

blur, focus,resizing, not bubbled up

stop propagation()  on childnodes, will stop

*/