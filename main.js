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
    // save current styles position on divs
 let classesList = [...slides].map(i => i.classList[1]);
 let currentDot = document.querySelector('.dots-container svg.selected-dot');
 
    // move saved classes 1 div backwards
 slides.forEach((slide, index, slides) => {
    if (index > 0) {
        slide.classList.replace(slide.classList[1], classesList[index - 1])
    } else if (index === 0) {
        slide.classList.replace(slide.classList[1], classesList[classesList.length - 1])
        }
 })
}
const handleRightClick = () => {
    // save current styles position on divs
 let classesList = [...slides].map(i => i.classList[1]);
    // move saved classes 1 div backwards
 slides.forEach((slide, index, slides) => {
    if (index < slides.length - 1) {
        slide.classList.replace(slide.classList[1], classesList[index + 1])
    } else if (index == slides.length - 1) {
        slide.classList.replace(slide.classList[1], classesList[0])
        }
 })
}

// the other way to handle right click
//const handleRightClick = () => {
//    let myClass = slides[0].classList[1];
//    slides.forEach((slide, index, slides) => {
//        if (index < slides.length - 1) {
//            slide.classList.replace(slide.classList[1], slides[index + 1].classList[1])
//        } else if (index == slides.length - 1) { 
//            slide.classList.replace(slide.classList[1], myClass)}
//     })  
//}
const handleDotClick = (index) => {
    console.log(index)
   let myClasses = [... classesListOnLoad.slice(index, classesListOnLoad.length), ...classesListOnLoad.slice(0, index)];
   console.log(myClasses);
   slides.forEach((slide, slideIndex) => {
    slide.classList.replace(slide.classList[1], myClasses[slideIndex]);
   })
}  
//Event Listeners

rightbtn.addEventListener('click', handleRightClick);
leftbtn.addEventListener('click', handleLeftClick);
dots.forEach((dot, index) => dot.addEventListener('click', () => handleDotClick(index)))