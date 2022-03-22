
function slider() {
   new Swiper(".klients-slider", {
      centeredSlides: true,
      navigation: {
         nextEl: '.slide__next',
         prevEl: '.slide__prev',
       },
      slidesPerView: 3,
      initialSlide: 1,
      
      
   
   });
}
slider();

function menuOpen() {
   const menu = document.querySelector(".menu"),
overlay = document.querySelector(".menu__overlay"),
hamburger = document.querySelector(".hamburger"),
close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
   overlay.classList.add("menu__overlay__active");
   menu.classList.add("menu__active");
   document.body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
   overlay.classList.remove("menu__overlay__active");
   menu.classList.remove("menu__active");
   document.body.style.overflow = "";
});
}
menuOpen();



function modals() {
   let modalBtn = document.querySelector(".navbar__button"),
overlayForm = document.querySelector(".modal__overlay"),
closeModalBtn = document.querySelector(".modal__close"),
menuForm = document.querySelector(".modal__form"),
menuLinks = document.querySelectorAll(".menu a");
function openModal(buttonSelector, overlaySelector) {
   buttonSelector.addEventListener("click", () => {
      overlaySelector.style.display = "block";
      document.body.style.overflow = "hidden";
   });
}

function closeModal (buttonSelector, overlaySelector ) {
   buttonSelector.addEventListener("click", () => {
   
         overlaySelector.style.display = "none";
         document.body.style.overflow = "";
    
   });
   
}
menuLinks.forEach(item => {
   item.addEventListener("click", () => {
      if(document.querySelector(".menu__overlay").classList.contains("menu__overlay__active")){
         document.querySelector(".menu__overlay").classList.remove("menu__overlay__active");
         document.body.style.overflow = "";
      }
      
   });
});
closeModal(closeModalBtn, overlayForm);
openModal(modalBtn, overlayForm);
openModal(document.querySelector(".footer__button"), overlayForm);
}

modals();






const forms = document.querySelectorAll("form"),
inputs = document.querySelectorAll("input");
let messages = {
   failor: "извините произошла ошибка",
   succes: "спасибо вам скоро позвонят",
   loading: "загрузка"
};
const inputProfit = (selector) => {
   const numInputs = document.querySelectorAll(selector);
   numInputs.forEach(item => {
     item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, "");
     });
   });
};
inputProfit('input[name="phone"]');



function clearInputs() {
   inputs.forEach(item => {
      item.value = "";
   });
}

const  postData = async (url, data) => {
   document.querySelector(".status").textContent = messages.loading;
   const res = await fetch(url, {
      method: "POST",
      body: data
   });
   return await res.text();
};
forms.forEach(item => {
   item.addEventListener("submit", (e) => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.append(statusMessage);
      const formData = new FormData(item);
      postData("mailer/smart.php", formData)
      .then(res => {
         console.log(res);
         document.querySelector(".status").textContent = messages.succes;
      })
      .catch(() => {
         document.querySelector(".status").textContent = messages.failor;
      })
      .finally(() => {
         clearInputs();
         setTimeout(() => {
            statusMessage.remove();
         }, 2000);
      });
   });
});














