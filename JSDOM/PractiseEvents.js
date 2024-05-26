//ways to apply events:
// 1. direct to the html element onclick()
// 2. element.addEventListener("click",function);
// 3. MouseOver

const buttonTwo=document.querySelector('.btn-2');

function alertBtn(){
    alert("hey i'm button 2!");
};

buttonTwo.addEventListener("click",alertBtn);

//MouseOver

const box3= document.querySelector('.box-3');

function changeBkgColor(){
    box3.style.backgroundColor="blue";
}

box3.addEventListener("mouseover",changeBkgColor);
