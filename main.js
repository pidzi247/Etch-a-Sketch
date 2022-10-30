function createGrid() {
  //Access div containing the grid
  const container = document.getElementById("container");

  //Variables that holds grid rows and columns
  let rows = 16;
  let columns = 16;

  //Variables that governs squares width and height based on how many rows 
  //and columns there are
  let squareWidth = container.clientWidth/columns-2;
  let squareHeight = container.clientHeight/rows-2;

  //Loop that creates the desired grid
  for (let j = 0; j < rows*columns; j++) {
    const newDiv = document.createElement("div");
    newDiv.style.height = `${squareHeight}px`;
    newDiv.style.width = `${squareWidth}px`;
    newDiv.classList.add('square');
    container.appendChild(newDiv);
  }
}

container.onload = createGrid();

let squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    square.style.background = "black";
    square.style.transition = "background 0.5s ease-in-out";
  });
});

let reset = document.querySelector('.reset');

reset.addEventListener("click", () => {
  squares.forEach(square => {
    square.style.background = "white";
  });
});






