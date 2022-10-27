const container = document.getElementById("container");



for (let index = 0; index < 16; index++) {
  const newDiv = document.createElement("div");
  newDiv.style.height = "10px";
  newDiv.style.width = "10px";
  newDiv.style.border = "1px solid black";
  container.appendChild(newDiv);
  
}
