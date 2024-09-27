const cart=["pant","shirt","kurta"];

createOrder(cart).then((orderId)=> {
    console.log(orderId);
    return orderId;
}).then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch((err)=>{console.log(err.message);});

function createOrder(cart){
    const pr=new Promise (
        function(resolve,reject){
            if(!validateCart(cart)){
                const err= new Error("cart isnt valid");
                reject(err);
            }
            const orderId="123"
            if(orderId){
                resolve(orderId)
            }
        }
    );
    return pr;
}
function validateCart(cart){
    return true;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment successful")
    });
}