//Reveal Event

const revealBtn=document.querySelector('.reveal-btn');

const contents= revealBtn.nextElementSibling;

function revealfn(){
  if(contents.classList.contains('hidden-content')){
    contents.classList.remove('hidden-content'); contents.classList.add('show-content');
  }else  if(contents.classList.contains('show-content')){
    contents.classList.remove('show-content'); contents.classList.add('hidden-content');}

}

revealBtn.addEventListener("click",revealfn);