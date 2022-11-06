//Variables to initiate default size of grid and color of grid squares
const defaultSize = 16;
const defaultColor = 'black';

let activeColor = defaultColor;
let gridSize = defaultSize;


//Variables that hold access to DOM elements
const container = document.getElementById("container");
const black = document.getElementById('black');
const random = document.getElementById('random');
const reset = document.getElementById('reset');
const eraser = document.getElementById('eraser');

let slider = document.getElementById('myRange');


//Function that creates default basic grid on start up
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
  if(activeColor === 'black') {
    event.target.style.background = "black";
  } else if(activeColor === 'random') {
    event.target.style.background = randomColor();
  } else if(activeColor === 'white'){
    event.target.style.background = 'white';
  }
}

function activateButton(color) {
  switch(color) {
    case 'black':
      activeColor = 'black';
      random.classList.remove('active');
      eraser.classList.remove('active');
      black.classList.add('active');
      break;
    case 'green':
      activeColor = 'random';
      black.classList.remove('active');
      eraser.classList.remove('active');
      random.classList.add('active');
      break;
    case 'white':
      activeColor = 'white';
      random.classList.remove('active');
      black.classList.remove('active');
      eraser.classList.add('active');
      break;
  }
}

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
}


black.onclick = () => activateButton('black');
random.onclick = () => activateButton('green');
eraser.onclick = () => activateButton('white');
reset.onclick = () => { container.innerHTML = ''; createGrid(gridSize)};


window.onload = createGrid(defaultSize);






