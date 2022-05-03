/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const Desert = () => {
   // alert('make smaller!');

   document.querySelector("body").className = 'desert'
};
const Ocean = () => {
   // alert('make smaller!');

   document.querySelector("body").className = 'ocean'
};
const High_contrast = () => {
   // alert('make smaller!');

   document.querySelector("body").className = 'high-contrast'
};

const defult = () => {
   // alert('make smaller!');

   // document.querySelector("body").className = 'None'
   document.querySelector("body").removeAttribute('class')
   
};

document.querySelector("#desert").addEventListener('click', Desert);
document.querySelector("#ocean").addEventListener('click', Ocean);
document.querySelector("#high-contrast").addEventListener('click', High_contrast);
document.querySelector("#default").addEventListener('click', defult);