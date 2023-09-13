const slider1 = {
    slides: document.querySelectorAll('.slide'),
    dots: document.querySelectorAll('#dots-container svg'),
    dotsContainer: document.querySelector('#dots-container'),
    classesListOnLoad: [...document.querySelectorAll('.slide')].map(i => i.classList[1]),
    rightbtn: document.querySelector('#rightbtn'),
    leftbtn: document.querySelector('#leftbtn')
}
const slider2 = {
    slides: document.querySelectorAll('.customer-card'),
    dots: document.querySelectorAll('#dots-container2 svg'),
    dotsContainer: document.querySelector('#dots-container2'),
    classesListOnLoad: [...document.querySelectorAll('.customer-card')].map(i => i.classList[1]),
    rightbtn: false,
    leftbtn: false
}
console.log(slider1.classesListOnLoad, slider2.classesListOnLoad)
//functions
const sliderFunction = (slider) => {
const { slides, dots, dotsContainer, rightbtn, leftbtn } = slider;
// slider btns handlers
const handleLeftClick = () => {
    if (leftbtn) {leftbtn.disabled = true};
    // save current styles position on divs
 let classesList = [...slides].map(i => i.classList[1]);
 let nextDot = undefined;   
 let currentDot = dotsContainer.querySelector('svg.selected-dot');
 //move selected dot to the left 
 if ([...dots].indexOf(currentDot) === 0) {
    nextDot = dots[dots.length-1];
 } else if ([...dots].indexOf(currentDot) > 0) {
    nextDot = currentDot.previousElementSibling;
 }
 currentDot.classList.remove('selected-dot');
 nextDot.classList.add('selected-dot');
    // move saved classes 1 div backwards
 slides.forEach((slide, index, slides) => {
    if (index > 0) {
        slide.classList.replace(slide.classList[1], classesList[index - 1])
    } else if (index === 0) {
        slide.classList.replace(slide.classList[1], classesList[classesList.length - 1])
        }
 })
 if (leftbtn) {setTimeout(() => {leftbtn.disabled = false}, 200)};
 
}
const handleRightClick = () => {
    if (rightbtn) {rightbtn.disabled = true};
    // save current styles position on divs
 let nextDot = undefined;   
 let classesList = [...slides].map(i => i.classList[1]);
 let currentDot = dotsContainer.querySelector('svg.selected-dot');
 console.log(currentDot);
 // move selected dot to the right
 if ([...dots].indexOf(currentDot) < dots.length - 1) {
    nextDot = currentDot.nextElementSibling;
 } else if ([...dots].indexOf(currentDot) === dots.length - 1) {
    nextDot = dots[0];
 }
 currentDot.classList.remove('selected-dot');
 nextDot.classList.add('selected-dot');
    // move saved classes 1 div backwards
 slides.forEach((slide, index, slides) => {
    if (index < slides.length - 1) {
        slide.classList.replace(slide.classList[1], classesList[index + 1])
    } else if (index == slides.length - 1) {
        slide.classList.replace(slide.classList[1], classesList[0])
        }
 })
 if (rightbtn) {setTimeout(() => {rightbtn.disabled = false}, 200)};
}

const handleDotClick = (index) => {
    let previouseDot = dotsContainer.querySelector('svg.selected-dot');
    let previouseIndex = [...dots].indexOf(previouseDot);
    let newDot = dots[index];
    let counter = index - previouseIndex;
    if (counter > 0) {
        handleRightClick();
        counter--;
        let interval = setInterval(() => {
            if (counter === 0) {
                clearInterval(interval)
            } else {
            handleRightClick();
            counter--
            }
        }, 200)
    } else if (counter < 0) {
        handleLeftClick();
        counter++;
        let interval = setInterval(() => {
            if (counter === 0) {
                clearInterval(interval)
            } else {
            handleLeftClick();
            counter++
            }
        }, 200)
    } 
}  

//Event Listeners

if (rightbtn) {rightbtn.addEventListener('click', handleRightClick)};
if (leftbtn) {leftbtn.addEventListener('click', handleLeftClick)};
dots.forEach((dot, index) => dot.addEventListener('click', () => handleDotClick(index)));
}

sliderFunction({slides, dots, classesListOnLoad, rightbtn, leftbtn} = slider1);
sliderFunction({slides, dots, classesListOnLoad, rightbtn, leftbtn} = slider2);