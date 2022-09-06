
window.addEventListener('DOMContentLoaded', () => {
const wrapper = document.querySelector(".programs_slider");
const slideInner = document.querySelector(".slider__inner");
const slides = document.querySelectorAll(".slide");
const width = getComputedStyle(wrapper).width;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let offset = 0;
const boxWidth = (slides[1].clientWidth)

next.addEventListener("click", () => {
   if(offset >= ((parseInt(boxWidth) * slides.length)) + (20 * slides.length)) {
      offset = 0
   } else {
      offset += (parseInt(boxWidth) + 20)
   }
   console.log(offset)

   slideInner.style.transform = `translateX(-${offset}px)`
   
   
})

prev.addEventListener("click", () => {
   if(offset <= 0) {
      offset = ((parseInt(boxWidth) * slides.length)) + (20 * slides.length)
   } else {
      offset -= (parseInt(boxWidth) + 20)
   }
   console.log(offset)

   slideInner.style.transform = `translateX(-${offset}px)`
   
   
})





const scrolling = (upSelectror) => {
   let upElem = document.querySelector(upSelectror);
   upElem.style.display = "none";
   window.addEventListener("scroll", () => {
      if(document.documentElement.scrollTop > 1650) {
         upElem.style.display = "block";
      } else {
         upElem.style.display = "none";
      }
   });
   
};
scrolling(".up");





})



