const elements = document.querySelectorAll(".main__elem");
const stars = document.querySelectorAll(".star");
const arrows = document.querySelectorAll(".arrow");
const opened = document.querySelectorAll(".main__row__opened");
const contens = document.querySelectorAll(".appbooster__wrapper");
const btns = document.querySelectorAll(".navbar__btn div")
contens[0].style.display = "none"
let click = false
elements.forEach((element, i) => {
   element.addEventListener("click", (e) => {
      e.stopPropagation()
      stars[i].classList.toggle("star__active")
     
   })
})


arrows.forEach((element, i) => {
   element.addEventListener("click", (e) => {
      e.target.classList.toggle("arrow__active")
      opened[i].classList.toggle("main__row__opened__active")
   })
})

btns.forEach((btn, i) => {
   btn.addEventListener("click", (e) => {
      btns.forEach((btn, i) => {
         btn.classList.remove("active")
      })
      e.target.classList.add("active")
      contens.forEach(content => {
         content.style.display = "none"
      })
      contens[i].style.display = "grid"
   })
})