const carousel = () => {
   const slides = document.querySelectorAll(".carousel__item");
   const rightBtn = document.querySelector(".carousel__right");
   const leftBtn = document.querySelector(".carousel__left");
   const dots = document.querySelectorAll(".carousel__dots__item");
   let active = 1;
   const removeClass = (className) => {
      slides.forEach(item => {
         item.classList.remove(className);
         item.classList.remove(className);
         item.classList.remove(className);
      })
   }
   const addClass = (order, className) => {
      slides[order].classList.add(className);
      slides[order].classList.add(className);
      slides[order].classList.add(className);
   }
   swipe()
   dots.forEach((item, i) => {
      item.addEventListener("click", (e) => {
         dots.forEach(item => {
            item.classList.remove("active");
         })
      dots[i].classList.add("active");
      active = i + 1;
      swipe()
      });
   });
   rightBtn.addEventListener("click", () => {
     if(active < 3) {
        active += 1
     } else {
        active = 1
     }
     swipe()
   })
   leftBtn.addEventListener("click", () => {
     if(active > 1) {
        active -= 1
     } else {
        active = 3
     }
     swipe()
   })
   function swipe ()  {
      if(active == 1) {
         removeClass("carousel__item__first");
         removeClass("carousel__item__second");
         removeClass("carousel__item__third");
         slides[2].style.opacity = 0
         setTimeout(() => {
            slides[2].style.opacity = 1
         }, 200)
         addClass(0, "carousel__item__first")
         addClass(1, "carousel__item__second")
         addClass(2,"carousel__item__third")
         dots.forEach(item => {
            item.classList.remove("active")
         })
         dots[active - 1].classList.add("active")
      } else if(active == 2) {
         removeClass("carousel__item__first")
         removeClass("carousel__item__second")
         removeClass("carousel__item__third")
         slides[0].style.opacity = 0
         addClass(0, "carousel__item__second")
         setTimeout(() => {
            slides[0].style.opacity = 1
         }, 200)
         addClass(1, "carousel__item__first")
         addClass(2, "carousel__item__third")
         dots.forEach(item => {
            item.classList.remove("active")
         })
         dots[active - 1].classList.add("active")
      } else if(active == 3) {
         removeClass("carousel__item__first")
         removeClass("carousel__item__second")
         removeClass("carousel__item__third")
         slides[1].style.opacity = 0
         addClass(0, "carousel__item__third")
         setTimeout(() => {
            slides[1].style.opacity = 1
         }, 200)
         addClass(1, "carousel__item__second")
         addClass(2, "carousel__item__first")
         dots.forEach(item => {
            item.classList.remove("active")
         })
         dots[active - 1].classList.add("active")
      }
   }
 }
carousel()
export default carousel