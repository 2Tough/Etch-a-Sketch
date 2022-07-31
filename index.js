
const whiteboard = document.getElementById("whiteboard");
const resetEl = document.getElementById("reset");
const submit = document.getElementById("submit");
const number = document.getElementById("number");

function makeRows(rows, cols) {
  whiteboard.style.setProperty('--grid-rows', rows);
  whiteboard.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    
    whiteboard.appendChild(cell).className = "item";


    cell.addEventListener('mouseover', 
    e => e.target.classList.add('my-colour-class')
  )
  
  
  };
};

makeRows(16, 16);

resetEl.addEventListener('click', function(){

 whiteboard.className += " shake"
  history.go(0);
})

submit.addEventListener('click', function(){
  let num = 0
  num = number.value
  makeRows(num,num)
  
})