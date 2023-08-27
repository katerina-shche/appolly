const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('#dots-container svg');
console.log(dots);
const classesListOnLoad = [...slides].map(i => i.classList[1]);
const rightbtn = document.querySelector('#rightbtn');
console.log(rightbtn);
const leftbtn = document.querySelector('#leftbtn');
console.log(leftbtn);

//functions
// slider btns handlers
const handleLeftClick = () => {
    leftbtn.disabled = true;
    // save current styles position on divs
 let classesList = [...slides].map(i => i.classList[1]);
 let nextDot = undefined;   
 let currentDot = document.querySelector('#dots-container svg.selected-dot');
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
 setTimeout(() => {leftbtn.disabled = false}, 1000);
 
}
const handleRightClick = () => {
    rightbtn.disabled = true;
    // save current styles position on divs
 let nextDot = undefined;   
 let classesList = [...slides].map(i => i.classList[1]);
 let currentDot = document.querySelector('#dots-container svg.selected-dot');
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
 setTimeout(() => {rightbtn.disabled = false}, 1000);
}

const handleDotClick = (index) => {
    console.log(index);
    let previouseDot = document.querySelector('#dots-container svg.selected-dot');
    let previouseIndex = [...dots].indexOf(previouseDot);
    let newDot = dots[index];
    let counter = index - previouseIndex;
    //previouseDot.classList.remove('selected-dot');
    //newDot.classList.add('selected-dot');

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
        }, 1000)
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
        }, 1000)
    } 
}  

//Event Listeners

rightbtn.addEventListener('click', handleRightClick);
leftbtn.addEventListener('click', handleLeftClick);
dots.forEach((dot, index) => dot.addEventListener('click', () => handleDotClick(index)))


//previouse dot handler: 
//
//let myClasses = [... classesListOnLoad.slice(index, classesListOnLoad.length), ...classesListOnLoad.slice(0, index)];
//console.log(myClasses);
//slides.forEach((slide, slideIndex) => {
// slide.classList.replace(slide.classList[1], myClasses[slideIndex]);
//})