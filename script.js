let entries = document.querySelector(".entries");
let result = document.querySelector(".result");
let string = "";
let start = true ;
let clearAll = document.querySelector(".clearAll");
let dot = document.querySelector(".decimal");
let Pclear = document.querySelector(".clear");
let brackets = document.querySelectorAll(".bracket");
let audio1 = new Audio('sound/Operator.wav');
let Aud1 = Array.from(document.querySelectorAll(".aud1"));
let audio2 = new Audio('sound/numbers.wav');
let Aud2 = Array.from(document.querySelectorAll(".aud2"));
let audio3 = new Audio('sound/equalTo.wav');
let numbers = Array.from(document.querySelectorAll(".numbers"));
let operators = Array.from(document.querySelectorAll(".operator"));
let equalTo = document.querySelector(".equal");

if(start == true ){
numbers.forEach((e) => {
  e.addEventListener("click", () => {
    string = string + e.innerHTML;
    entries.textContent = string;
    
   
  });
});
}


if(start == true ){
operators.forEach((e) => {
  e.addEventListener("click",()=>{
    string = string + e.innerHTML
    entries.textContent = string;
   
  })
});

}


equalTo.addEventListener("click",()=>{
  console.log(string);
  console.log(eval(string));
  document.querySelector(".result").textContent = eval(string);
  audio3.play();
})

clearAll.addEventListener("click",()=>{
  string = "";
  result.textContent = string;
  entries.textContent = string;
  console.log("clear")
})

dot.addEventListener("click",()=>{
 
  string = string + ".";
  entries.textContent = string;
})

Pclear.addEventListener("click",()=>{
 string = string.slice(0,string.length-1);
  entries.textContent = string;
})

brackets.forEach((e)=>{
  e.addEventListener("click",()=>{
    string = string + e.innerHTML;
    entries.textContent = string;
  
  })

})

Aud1.forEach((e)=>{
  e.addEventListener("click",()=>{
    audio1.play();

  })
})


Aud2.forEach((e)=>{
  e.addEventListener("click",()=>{
    audio2.play();

  })
})