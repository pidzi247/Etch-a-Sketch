//Variables to initiate default size of grid and color of grid squares
const defaultSize = 16;
const defaultColor = '#000000';
const defaultButton = 'black';

let activeColor = defaultColor;
let activeButton = defaultButton;
let gridSize = defaultSize;


//Variables that hold access to DOM elements
const container = document.querySelector(".sketch-area");
const colorPalette = document.getElementById('color-pallete');
const random = document.getElementById('random');
const reset = document.getElementById('reset');
const eraser = document.getElementById('eraser');
const colorWheel = document.getElementById('color-wheel');
let slider = document.getElementById('myRange');
let gridValue = document.getElementById('grid-size');

let toggle = false;
document.body.addEventListener('mousedown', () => toggle = true)
document.body.addEventListener('mouseup', () => toggle = false)



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

function setColor(newColor) {
  activeColor = newColor;
}

function changeButton(newButton) {
  activateButton(newButton);
  activeButton = newButton;
}

function color(e) {
  if(!toggle) return;
  if(activeButton === 'colorWheel') {
    e.target.style.background = activeColor;
  } else if(activeButton === 'random') {
    e.target.style.background = randomColor();
  } else if(activeButton === 'eraser'){
    e.target.style.background = 'white';
  }
}

function activateButton(btn) {
  switch(btn) {
    case 'colorWheel':
      random.classList.remove('active');
      eraser.classList.remove('active');
      colorPalette.classList.add('active');
      break;
    case 'random':
      eraser.classList.remove('active');
      colorPalette.classList.remove('active');
      random.classList.add('active');
      break;
    case 'eraser':
      random.classList.remove('active');
      colorPalette.classList.remove('active');
      eraser.classList.add('active');
      break;
    default:
      random.classList.remove('active');
      colorPalette.classList.remove('active');
      eraser.classList.remove('active');
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

slider.onchange = (e) => {gridSize = e.target.value; container.innerHTML = ""; createGrid(e.target.value);}
colorWheel.oninput = (e) => setColor(e.target.value);
colorPalette.onclick = () => changeButton('colorWheel');
random.onclick = () => changeButton('random');
eraser.onclick = () => changeButton('eraser');
reset.onclick = () => { container.innerHTML = ''; changeButton('reset'); createGrid(gridSize)};


window.onload = createGrid(defaultSize);





