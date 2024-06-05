/*
key concepts explored in this project 
1. DOM queryselector()
2. addEventListener()
3.Math object
4. innerText
*/
var proverb=document.querySelector('.proverb')
var writer=document.querySelector('.writer')

 document.querySelector('.buttonQ').addEventListener('click',function generateQuote(){
    let id=getRandomIntInclusive(0,9);
    proverb.innerText=quotes[id].quote;
    writer.innerText=quotes[id].author
    //console.log("clicked");
 });
 function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
    // The maximum is inclusive and the minimum is inclusive
  }
  

 const quotes = [
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {quote: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln"},
    {quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
    {quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb"},
    {quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs"}
];


//console.log(quotes[1].quote);//quotes[1].quote
//proverb.innerText=quotes[1].quote


    
 



