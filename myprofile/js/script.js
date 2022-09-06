window.addEventListener("DOMContentLoaded", () => {
   const postData = async(url, data) => {
      const res = await fetch(url, {
         method: "post",
         // headers: {
         //    'Content-type': 'application/json'
         // },
         body: data
      });    
      return await res.text()
   }
   const load = (percentSel, colorSel) => {
      const percentNumber = document.querySelectorAll(percentSel)
      const color = document.querySelectorAll(colorSel)
   
      percentNumber.forEach((number, i) => {
         color[i].style.width = number.innerText
      })
     
   
   }
   
   load(".skill__percent", ".mySkills__load__color")

   new WOW().init();

   const navbarPosition = (navbarSel, activeClass) => {
      const navbar = document.querySelector(navbarSel),
            navbarFirtsPos = navbar.getBoundingClientRect().top;
      
      window.addEventListener("scroll", () => {
      
     
        
         if (navbar.getBoundingClientRect().top <= 0) {
            navbar.classList.add(activeClass)
            
         } 
         if(document.documentElement.scrollTop <= navbarFirtsPos) {
            navbar.classList.remove(activeClass)
         }
      })

   }

   navbarPosition(".navbar", "navbar__active")


   const navbarItemsColor = (itemsSel) => {
      const items = document.querySelectorAll(itemsSel);
     
         items.forEach(item => {
            item.addEventListener('click', (e) => {             
                  items.forEach(item => {
                     item.style.color = "black"
                  })
                  e.target.style.color = "red"
            })
         })
      

      
    
     
 
           
   }

   navbarItemsColor(".navbar__link a")


       
       
      
      
   const senForm = (formSel, inputsSel, textAreaSel) => {
      const form = document.querySelector(formSel),
            inputs = document.querySelectorAll(inputsSel),
            textArea = document.querySelector(textAreaSel)
            const clearInputs = () => {
               inputs.forEach(input => {
                  input.value =  input.value.replace(input.value, "")
               })
               textArea.value =  textArea.value.replace(textArea.value, "")
            }
      let messages = {
         loading: "Wait a bit",
         succes: "I will be in contact with you shortly.",
         fail: "Something went wrong"
      }

      form.addEventListener('submit', (e) => {
         e.preventDefault();
      
       
         let statusmessage = document.createElement("div");
         statusmessage.classList.add("status", "animated", "fadeInUp")
         form.appendChild(statusmessage);
         statusmessage.textContent = messages.loading;
         let formData = new FormData(form);
         const values = Object.fromEntries(formData.entries());
         console.log(values)
         postData("mail.php", formData)
         .then(res => {    
            // console.log(res)
               statusmessage.textContent = messages.succes;
               setTimeout(() => {
                  statusmessage.remove()
               }, 2000)
         })
         .catch(() => {
            statusmessage.textContent = messages.fail;
         })
         .finally(() => {
            clearInputs();
         })
      })
   }
   senForm(".form", '.form input', '.form textarea');
  
 
   try{
      const hamburger = (hamSel, navSel) => {
         const hamburger = document.querySelector(hamSel);
               nav = document.querySelector(navSel);
               nav.classList.remove("navbar__active")
               hamburger.addEventListener("click", () => {
                  nav.style.display = "block"
                  nav.classList.add("animated", "fadeInUp")
                  
               })
      }
      hamburger(".hamburger", ".navbar")
   }catch(err) {}



  
})