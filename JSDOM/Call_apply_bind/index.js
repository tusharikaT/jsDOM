let name={
    fname:"akshay",
    lname:"saini",

}
let printFullName = function (hometown,state){
    console.log(this.fname+" "+this.lname+" from "+hometown+","+state);
}
//printFullName.call(name,"Dehradun","UK");

let name2={
    fname:"sachin",
    lname:"tendulkar",
}

//function borrowing using call mtd- invokes the functiong directly by passing the reference to variable

//printFullName.call(name2, "mumbai","MH");


// apply mtd  - arguments to be sent as arraylist

printFullName.apply(name2, ["mumbai","MH"]);

//bind mtd- returns a mt that can be called/invoked later

let printMyName=printFullName.bind(name2, "mumbai","MH");
console.log(printMyName);
printMyName();