const input = document.querySelector(".input");
const clear = document.querySelector(".clean");
const sqrt = document.querySelector(".sqrt");
const insert = (num) => {
   input.value = input.value + num;
   if(+input.value.length === 26) {
      input.value = "You can insert only 20 symbols";
      input.style.fontSize = "20px"
   }
}

const clean = () => {
   input.value =""
   input.style.fontSize = "30px"
}

const back = () => {
   input.value = input.value.substring(0, input.value.length - 1)
}


const equal = () => {
  let exp = input.value
   if(exp) {
      input.value = eval(exp)
   }
}


const sqrtFun = (value) => {
   for(let i = 0; i < value; i++) {
      if(i * i === value) {
         return i
      } 
         
      }
      
   }




sqrt.addEventListener("click", () =>  {
   let exp = +input.value;
   if(exp) {
      input.value = parseInt(sqrtFun(exp))
      if(input.value === "NaN") {
        input.value = "this number has no integer root"
        input.style.fontSize = "20px"
      } 
   }
})


