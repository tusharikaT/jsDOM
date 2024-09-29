const p1=new Promise(
    function(resolve,reject){
        setTimeout(()=>{resolve("promise resolve log")},10000);
    }
);
const p2=new Promise(
    function(resolve,reject){
        setTimeout(()=>{resolve("promise resolve log")},5000);
    }
);
const p=new Promise(
    function(resolve,reject){
        setTimeout(()=>{resolve("promise resolve log")},10000);
    }
);

async function handlePromise(){
    console.log("hello1");
    const res1=await p1;
    console.log("Namaste JS 1");
    console.log(res1);

    console.log("hello2");
    const res2=await p2;
    console.log("Namaste JS 2");
    console.log(res2);
}
handlePromise();


 //const dataPromise=getData();
//  function getData() {
//     p.then((res)=>{
//         console.log(res);
//     }); 

    // console.log("NAmaste Javascript");
    //js engine will not wait for the promise to be resolved
    // prints namaste js first and then promise resolve log after  10 sec
// }
// getData();

// dataPromise.then((res)=>{
//     console.log(res); 
//     console.log("NAmaste Javascript");
// });

// async function handleData(){
//     const val=await p;
////js engine waits for promise to be resolved and then proceeds ahead
//     console.log("NAmaste Javascript");
//     console.log(val);
// }

// handleData();