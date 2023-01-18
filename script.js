const defaultSize = 16;
const defaultColor = "#000000";
const defaultButton = "black";

let activeColor = defaultColor;
let activeButton = defaultButton;
let gridSize = defaultSize;
let toggle = false;

const container = document.getElementById("sketchArea");
const colorPalette = document.getElementById("colorPallete");
const colorWheel = document.getElementById("colorWheel");
const random = document.getElementById("random");
const reset = document.getElementById("reset");
const eraser = document.getElementById("eraser");
const slider = document.getElementById("myRange");
const gridValue = document.getElementById("gridSize");

//Function that creates default grid on start up
function createGrid(size) {
  //Variables that governs how many rows and columns there are
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  //Loop to create grid
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.addEventListener("mouseover", color);
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
  if (!toggle) return;
  if (activeButton === "colorWheel") {
    e.target.style.background = activeColor;
  } else if (activeButton === "random") {
    e.target.style.background = randomColor();
  } else if (activeButton === "eraser") {
    e.target.style.background = "gray";
  }
}

function activateButton(btn) {
  switch (btn) {
    case "colorWheel":
      random.classList.remove("active");
      eraser.classList.remove("active");
      colorPalette.classList.add("active");
      break;
    case "random":
      eraser.classList.remove("active");
      colorPalette.classList.remove("active");
      random.classList.add("active");
      break;
    case "eraser":
      random.classList.remove("active");
      colorPalette.classList.remove("active");
      eraser.classList.add("active");
      break;
    default:
      random.classList.remove("active");
      colorPalette.classList.remove("active");
      eraser.classList.remove("active");
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


//Event Listeners
document.body.addEventListener("mousedown", () => (toggle = true));
document.body.addEventListener("mouseup", () => (toggle = false));
colorWheel.addEventListener("input", (e) => setColor(e.target.value));
colorPalette.addEventListener("click", () => changeButton("colorWheel"));
random.addEventListener("click", () => changeButton("random"));
eraser.addEventListener("click", () => changeButton("eraser"));

reset.addEventListener("click", () => {
  container.innerHTML = "";
  changeButton("reset");
  createGrid(gridSize);
});

slider.addEventListener("change", (e) => {
  gridSize = e.target.value;
  container.innerHTML = "";
  createGrid(e.target.value);
});

window.onload = createGrid(defaultSize);
