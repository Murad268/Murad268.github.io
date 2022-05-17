const modal = () => {
   const btn = document.querySelectorAll(".openModal");
   const modal = document.querySelector(".orderModal");
   const exit = document.querySelector(".orderModal__box__exit");
   const successSendBtn = document.querySelector(".successSendBtn");
   const succesModal = document.querySelector(".successSendModal");
   const exitModal = document.querySelector(".successSendBtnExit");
   const contactsBtn = document.querySelector(".contactsBtn")
   btn.forEach(item => {
      item.addEventListener("click", () => {
         modal.classList.add("orderModal__active")
      })
   })
   exit.addEventListener("click", () => {
      modal.classList.remove("orderModal__active")
   })
   successSendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      succesModal.classList.add("successSendModal__active")
   })
   exitModal.addEventListener("click", (e) => {
      succesModal.classList.remove("successSendModal__active")
      modal.classList.remove("orderModal__active")
   })
   contactsBtn.addEventListener("click", (e) => {
      e.preventDefault()
      succesModal.classList.add("successSendModal__active")
   })
}
modal()
export default modal
