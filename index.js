
const whiteboard = document.getElementById("whiteboard");
const resetEl = document.getElementById("reset");
const submit = document.getElementById("submit");
let number = document.getElementById("number");
const custom = document.getElementById("custom");
let item = document.getElementsByClassName("item");

function makeRows(rows, cols) {
  whiteboard.style.setProperty('--grid-rows', rows);
  whiteboard.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
      whiteboard.appendChild(cell).className = "item";
    cell.addEventListener('mouseover', 
    e => e.target.classList.add('colourClass')
    
  )

  };
};

makeRows(16, 16);

resetEl.addEventListener('click', function(){

 document.getElementById('mainBox').className += " shake"
 setTimeout(resetTime(), 2000)
})

submit.addEventListener('click', function(){
  let num = 0
  num = number.value
   
  makeRows(num,num) 
  

})

function resetTime() {
   history.go(0);
}

