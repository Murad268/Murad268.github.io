const navbar = () => {
   const modalFun = (hamburgerSelector, menuSelector) => {
      const menu = document.querySelector(menuSelector);
      const hamburger =  document.querySelector(hamburgerSelector);
      hamburger.addEventListener("click", (e) => {
         if(e.target.classList.contains("miniNav__hamburger")) {
            menu.classList.add("miniMenu__active")
         } else {
            menu.classList.remove("miniMenu__active")
         }
      })
   }
   modalFun(".miniNav__hamburger", ".miniMenu")
   modalFun(".menuExit", ".miniMenu")
}
export default navbar