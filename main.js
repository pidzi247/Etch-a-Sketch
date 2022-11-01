const container = document.getElementById("container");
let slider = document.getElementById('myRange');
let reset = document.querySelector('.reset');

slider.addEventListener("change", () => {

  let rows = slider.value;

  container.innerHTML ="";
  
  //Variables that governs squares width and height based on how many rows 
  //and columns there are
  let squareWidth = container.clientWidth/rows;
  let squareHeight = container.clientHeight/rows;
  
  //Loop that creates the desired grid
  for (let j = 0; j < rows*rows; j++) {
    const newDiv = document.createElement("div");
    newDiv.style.height = `${squareHeight}px`;
    newDiv.style.width = `${squareWidth}px`;
    newDiv.classList.add('square');
    container.appendChild(newDiv);
  }

  let squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.add('hover-square');
    });
  });

  reset.addEventListener("click", () => {
    squares.forEach(square => {
      square.classList.remove('hover-square');
    });
  });

});





