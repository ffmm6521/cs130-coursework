/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();


//Hint 1:

// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    //console.log( elem);
    currentIndex = parseInt(elem.dataset.index);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).

// first get all of the image elements from the DOM:
const imageElements = document.querySelectorAll('.image');

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}



//Hint 2: currentIndex as a global variable:
let currentIndex = 0;



const showNext = (ev) => {
    currentIndex += 1;
    if (currentIndex >= imageElements.length ){
        currentIndex = 0;
    }
    console.log("currentIndex:", currentIndex);
    document.querySelector('.featured_image').style.backgroundImage = imageElements[currentIndex].style.backgroundImage;

};

const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex <= 0  ){
        currentIndex = imageElements.length - 1;
    }
    console.log("currentIndex:", currentIndex);
    document.querySelector('.featured_image').style.backgroundImage = imageElements[currentIndex].style.backgroundImage;

};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).


document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;