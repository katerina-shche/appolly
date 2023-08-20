const slides = document.querySelectorAll('.slide');
const classesList = [...slides].map(i => i.classList[1]);
console.log(classesList);
const rightbtn = document.querySelector('#rightbtn');
console.log(rightbtn);
const leftbtn = document.querySelector('#leftbtn');
console.log(leftbtn);

//functions
const handleRightClick = () => {
 console.log('moove to the right')
 slides.forEach(slide => {
    console.log(classesList.indexOf(slide.classList[1]))
 })
}
const handleLeftClick = () => {
    console.log('moove to the left')
   }

//Event Listeners

rightbtn.addEventListener('click', handleRightClick);
leftbtn.addEventListener('click', handleLeftClick);