const makeBigger = () => {
   // alert('make bigger!');
   var computedFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
   var fontSize  = parseInt(computedFontSize) + 10 + "px";
   document.querySelector(".content").style.fontSize = fontSize 
};

const makeSmaller = () => {
   // alert('make smaller!');
   var computedFontSize = window.getComputedStyle(document.querySelector(".content")).fontSize;
   var fontSize  = parseInt(computedFontSize) -10 + "px";
   document.querySelector(".content").style.fontSize = fontSize 
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

