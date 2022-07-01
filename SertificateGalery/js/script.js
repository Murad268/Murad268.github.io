window.addEventListener("DOMContentLoaded", () => {
   const wrapper = document.querySelector(".certificates__wrapper");
   const filters = document.querySelectorAll(".certificates__filters div");

   const getData = async(url) => {
      const res = await fetch(url)
      if(!res.ok) {
         console.log("error")
      }
      return await res.json()
   }

   getData("./db.json").then(res => {
      res.certificates.forEach(item => {
         const card = document.createElement("div");
         card.style.width = `18rem`;
         card.classList.add("card");
         card.setAttribute("data-name", item.category)
         const html = 
         `
            <a target = "_blank" href="${item.src}" ><img src="${item.src}" class="card-img-top" alt="..."></a>
            
            <div class="card-body">
            <p class="card-text">${item.name}</p>
           
                  <a target = "_blank" href="${item.src}" class="btn btn-success see">bax</a>
                  <a download href="${item.downloadLink}" class="btn btn-danger download">yüklə</a>
          
            </div>
         `
         card.innerHTML = html
         wrapper.appendChild(card)
         return card
      })
   })
   
   filters.forEach((filter, i) => {
      filter.addEventListener("click", (e) => {
         document.querySelectorAll(".card").forEach(card => {
            if (card.getAttribute("data-name") == e.target.getAttribute("data-name")) {
               card.style.display = "block"
            } else {
               card.style.display = "none"
            }
           if(e.target.getAttribute("data-name") == "all") {
               card.style.display = "block"
           }
         })
      })
   })
})