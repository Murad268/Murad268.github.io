const regModal = () => {
  const modal = (triggerSelector, modalSelector) => {
      let val;
      document.querySelectorAll(".regTest__modal__box__checkbox ul li input").forEach(item => {
         item.addEventListener("click", () => {
            val = item.value
         })
      })
     const trigger = document.querySelectorAll(triggerSelector)
     const modal = document.querySelector(modalSelector)

      const hideAllModalBox = (modalBoxClass) => {
         document.querySelectorAll(modalBoxClass).forEach(item => {
            item.style.display = "none"
         })
      }
      const showModalBox = (modalBoxClass) => {
         document.querySelector(modalBoxClass).style.display = "block"
      }
      const addActive = (modalSel) => {
        modal.classList.add(modalSel)
      }
      const removeActive = (modalSel) => {
        modal.classList.remove(modalSel)
      }
      const setBody = () => {
        document.querySelector("html").style.paddingRight = "17px"
        document.body.style.overflow = "hidden"
      }
      const resetBody = () => {
        document.querySelector("html").style.paddingRight = "0"
        document.body.style.overflow = ""
      }
      const time = () => {
         setTimeout(() => {
            hideAllModalBox(".modalBox")
            showModalBox(".regStart__modal__box")
         }, 401)
      }
     trigger.forEach(item => {
         item.addEventListener("click", (e) => {
              addActive("regStart__modal__active")
              setBody()
            if(item.classList.contains("openModal")) {
               hideAllModalBox(".modalBox")
               showModalBox(".regStart__modal__box")
           } else if(item.classList.contains("startTest")) {
              hideAllModalBox(".modalBox")
              showModalBox(".regTest__modal__box")
           } else if(e.target.classList.contains("answerBtn")) {
               hideAllModalBox(".modalBox")
              if(val == "first") {
               showModalBox(".trueAnswer__modal__box")
              } else {
               showModalBox(".falseAnswer__modal__box")
              }
           } else if(e.target.classList.contains("trueAnswer__modal__box__btn") || e.target.classList.contains("falseAnswer__modal__box__btn")) {
               hideAllModalBox(".modalBox")
               showModalBox(".startCourse__modal")
           } else if(e.target.classList.contains("navbar__btns__reg")) {
               setBody()
               addActive("registrationModal__active")
           } else if(e.target.classList.contains("registrationExit")) {
               resetBody()
               removeActive("registrationModal__active")
           } else if(e.target.classList.contains("registerBtn") || e.target.classList.contains("logInBtn")) {
               resetBody()
               alert("Это уже работа Бэкендера")
               removeActive("registrationModal__active")
               removeActive("signIn__active")
           } else if(e.target.classList.contains("enter")) {
               setBody()
               addActive("signIn__active")
           } else if(e.target.classList.contains("signInExit")) {
               resetBody()
               removeActive("signIn__active")
           } else if(e.target.classList.contains("startCourse__modal__btn")) {
               hideAllModalBox(".modalBox")
               showModalBox(".regForm")
           } else if(item.classList.contains("modalExit")) {
                removeActive("regStart__modal__active")
                resetBody()
                time()
           }
         })
     })
     document.querySelector('form').addEventListener("submit", (e) => {
      e.preventDefault()
      hideAllModalBox(".modalBox")
      showModalBox(".sendSucces__modal")
})
  }
  modal(".openModal", ".regStart__modal")
  modal(".modalExit", ".regStart__modal")
  modal(".startTest", ".regStart__modal")
  modal(".answerBtn", ".regStart__modal")
  modal(".trueAnswer__modal__box__btn", ".regStart__modal")
  modal(".falseAnswer__modal__box__btn", ".regStart__modal")
  modal(".startCourse__modal__btn", ".regStart__modal")
  modal(".navbar__btns__reg", ".registrationModal")
  modal(".registrationExit", ".registrationModal")
  modal(".registerBtn", ".registrationModal")
  modal(".enter", ".signIn")
  modal(".signInExit", ".signIn")
  modal(".logInBtn", ".signIn")
}
export default regModal
