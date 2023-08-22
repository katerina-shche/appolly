const slides = document.querySelectorAll('.slide');

const rightbtn = document.querySelector('#rightbtn');
console.log(rightbtn);
const leftbtn = document.querySelector('#leftbtn');
console.log(leftbtn);

//functions
const handleLeftClick = () => {
 console.log('moove to the right')
 let classesList = [...slides].map(i => i.classList[1]);
 slides.forEach((slide, index, slides) => {
    if (index > 0) {
        slide.classList.replace(slide.classList[1], classesList[index - 1])
    } else if (index === 0) {
        slide.classList.replace(slide.classList[1], classesList[classesList.length - 1])

    }
 })
 
}
const handleRightClick = () => {
    let myClass = slides[0].classList[1];
    console.log('moove to the left')
    slides.forEach((slide, index, slides) => {
        console.log(slide, index, slides);
        
        if ( index < slides.length - 1 ) {
            slide.classList.replace(slide.classList[1], slides[index + 1].classList[1])
        } else if (index == slides.length - 1) { 
            slide.classList.replace(slide.classList[1], myClass)}
     })  
   }
    
//Event Listeners

rightbtn.addEventListener('click', handleRightClick);
leftbtn.addEventListener('click', handleLeftClick);