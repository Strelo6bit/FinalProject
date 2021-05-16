let burgerButton = document.querySelector(".burger-menu")
let inMenu = document.querySelector(".inmenu")
function dropDown(x) {
    x.classList.toggle("change");
    inMenu.classList.toggle('visible')

}
let leftArrow = document.querySelector(".left")
let rightArrow = document.querySelector(".right")
let slideImg = document.querySelector('.slide__img')
let currentIndex = 0;

let sources = ['1','2','3', '4'];

function changeSlide(index) {
    
    slideImg.attributes[0].nodeValue = `${currentIndex}.jpg`;
}

leftArrow.addEventListener('click', (Event) => {
    Event.preventDefault();
    if (currentIndex <= 0){
        currentIndex = sources.length;
    } 

    changeSlide(--currentIndex);
});
rightArrow.addEventListener('click', (Event) => {
    Event.preventDefault();
    if (currentIndex >=sources.length){
        currentIndex = 0 
    }
    
    changeSlide(++currentIndex);
});