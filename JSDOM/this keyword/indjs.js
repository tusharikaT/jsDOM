"use strict"

//this in global space

console.log(this); //global object- window,global 

//this inside a function

function x(){
    //value of this depends on strict or non strict mode
    console.log(this);
}


//this in strict mode (this substitution)
// if the value of this keyword is undefined or null, this keyword will be replaced with globalObject only in non-strict mode

//this keyword value depends on how this is called (window)
x();
window.x();


// this inside a object's method

const obj={
    a:10,
    x:function(){
    console.log(this);
    console.log(this.a);
    }
}

obj.x();//value of fn is the object

//this inside arrow function
// it takes the this value of its encosing lexical context

const obj1={
    a:10,
    x: ()=>{
        console.log(this); 
    }
}
obj1.x();

 
//this inside nested arrow fn
const obj2={
    a:10,
    x: function(){
        //enclosing lexical context
    const y= ()=>{
        console.log(this); //obj2 coz enclosing lexical context is obj2's this, this in obj2 is obj2
    }
    y();
    },
   
}
obj2.x();


//this inside DOM elements=> it is a reference to the html element
 
//this inside class, constructor
