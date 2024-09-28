const p=new Promise((resolve,reject)=> resolve("Promise object resolve")
);

// const dataPromise=getData();
// function getData() {
//     return p;
// }
// dataPromise.then((res)=>console.log(res));

async function handleData(){
    const val=await p;
    console.log(val);
}

handleData();