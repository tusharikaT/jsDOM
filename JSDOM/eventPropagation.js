/*
document.querySelector('#grandparent')
.addEventListener('click',()=>{console.log("grandparent clicked");
})

document.querySelector('#parent')
.addEventListener('click',()=>{console.log("parent clicked");
})

document.querySelector('#child')
.addEventListener('click',()=>{console.log("child clicked");
})

*/

/*for event bubbling : clicked child then child,parent,grandparent logs
clicked parent then parent,grandparent logs
clicked grandparent then grandparent log

event goes/bubbles up in the hierarchy
*/
//2------------------------------------------------------------------------------------------------------------
/*
document.querySelector('#grandparent')
.addEventListener('click',()=>{console.log("grandparent clicked");
},true)

document.querySelector('#parent')
.addEventListener('click',()=>{console.log("parent clicked");
},true)

document.querySelector('#child')
.addEventListener('click',()=>{console.log("child clicked");
},true)
*/
/*for event capturing/trikling : clicked child then grandparent,parent,childlogs
clicked parent then grandparent,parent logs
clicked grandparent then grandparent log

event goes/captures down in the hierarchy
*/
//3------------------------------------------------------------------------------------------------------------


/*
document.querySelector('#grandparent')
.addEventListener('click',()=>{console.log("grandparent clicked");
},true)//capture

document.querySelector('#parent')
.addEventListener('click',()=>{console.log("parent clicked");
},false)//bubble

document.querySelector('#child')
.addEventListener('click',()=>{console.log("child clicked");
},true)//capture
*/

/*for event  : 
w3 rules: capture first and then bubble
clicked child then grandparent,child,parentlogs
clicked parent then grandparent,parent logs
clicked grandparent then grandparent log

event captures down an then bubbles up in the hierarchy
*/
//4------------------------------------------------------------------------------------------------------------
/*
document.querySelector('#grandparent')
.addEventListener('click',()=>{console.log("grandparent clicked");
},true)//capture

document.querySelector('#parent')
.addEventListener('click',()=>{console.log("parent clicked");
},false)//bubble

document.querySelector('#child')
.addEventListener('click',()=>{console.log("child clicked");
},false)//bubble

*/

/*for event  : 
w3 rules: capture first and then bubble
clicked child then grandparent,child,parentlogs
clicked parent then grandparent,parent logs
clicked grandparent then grandparent log

*/
//5------------------------------------------------------------------------------------------------------------
//this scenario has performance issues, and this operation is expensive.
//How to stop the propagation of events while Event bubbling and Capturing? 

// in the event object, we have access to stopPropagation method.
/*
document.querySelector('#grandparent')
.addEventListener('click',()=>{console.log("grandparent clicked");
})

document.querySelector('#parent')
.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("parent clicked");
})

document.querySelector('#child')
.addEventListener('click',()=>{console.log("child clicked");
})
*/
/*for event  : 
w3 rules: capture first and then bubble
clicked child then child, parent logs
clicked parent then parent logs
clicked grandparent then grandparent log

*/
//6------------------------------------------------------------------------------------------------------------


document.querySelector('#grandparent')
.addEventListener('click',(e)=>{
    e.stopPropagation;
    console.log("grandparent clicked");
},true)

document.querySelector('#parent')
.addEventListener('click',(e)=>{
   
    console.log("parent clicked");
},true)

document.querySelector('#child')
.addEventListener('click',(e)=>{
    
     console.log("child clicked");
},true)

/*for event capturing/trikling : clicked child then grandparent logs
clicked parent then grandparent logs
clicked grandparent then grandparent log

event goes/captures down in the hierarchy
*/

