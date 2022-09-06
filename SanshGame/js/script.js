alert("Login: Murad, parol: 123")

class Box {
   constructor(door, text, giftText, giftModal, giftModalText, close, blocked, login, pass, form) {
      this.door = document.querySelectorAll(door)
      this.text = document.querySelectorAll(text)
      this.giftText = document.querySelectorAll(giftText)
      this.giftModal = document.querySelector(giftModal)
      this.giftModalText = document.querySelector(giftModalText)
      this.close = document.querySelector(close)
      this.blocked = document.querySelector(blocked)
      this.form = document.querySelector(form)
      this.login = document.querySelector(login)
      this.pass = document.querySelector(pass)

   }
   async getData() {
      this.res = await fetch("../db/db.json");
      if(!this.res.ok) {
         console.log("error")
      }
      return this.res.json()
   }
   getInfo() {
      this.getData()
      .then(res =>  this.door.forEach((door, i) => {
         door.addEventListener("click", () => {
            door.style.marginRight = `-100%`
            this.set = setTimeout(() => {
               this.random = Math.floor(Math.random() * res.mass.length) 
               this.text[i].innerHTML = res.mass[this.random].img
               this.giftText[i].innerHTML = res.mass[this.random].name
               this.giftModal.style.display = "block"
               this.giftModalText.textContent = res.mass[this.random].giftText
               
            }, 400)
            
         })
      }))
   }
   opercite() {
      this.form.addEventListener("submit", (e) => {
         e.preventDefault()
         if(this.login.value === "Murad" && this.pass.value === "123") {
            this.blocked.style.marginRight = `-100%`
         } else {
            alert("parol səhvdir")
         }
      })
   }
   closeModal() {
      this.close.addEventListener("click", () => {
         this.giftModal.style.display = "none"
      })
   }
   render() {
      this.closeModal()
      this.opercite()
      this.getInfo()
      this.getInfo()
   }
}
const box = new Box(".door", ".text", ".giftText", ".giftModal", ".giftModalText", ".close", ".blocked", ".login", ".pass", ".startModal")
box.render()




