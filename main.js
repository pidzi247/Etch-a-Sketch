const defaultSize = 16;

const container = document.getElementById("container");
const black = document.getElementById('black');
const randomColor = document.getElementById('random');
let slider = document.getElementById('myRange');
let reset = document.querySelector('.reset');


function createGrid(size) {

  //Variables that governs squares width and height based on how many rows 
  //and columns there are
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
  //Loop that creates the desired grid
  for (let i = 0; i < size*size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('square');
    newDiv.addEventListener('mouseover', color);
    container.appendChild(newDiv);
  }

}

function color(event) {
  event.target.style.background = "black";
}

black.onclick = () => { black.classList.add('active')};

window.onload = createGrid(defaultSize);

console.log(black);





