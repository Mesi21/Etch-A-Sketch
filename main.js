const board = document.getElementById('board');
const resetBoard = document.getElementById('reset_btn');
const changeBoard = document.getElementById('grid_size');

const createGrid = (cols, rows) => {
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  let s = cols * rows;

  for (i = 0; i < s; i++) {
      let item = document.createElement('div');
      item.classList.add('grid-item');
      board.append(item);
  };
  
  gridElements = document.querySelectorAll('.grid-item');
  gridElements.forEach((item) => {
      item.addEventListener("mouseover", (ev) => {
          changeColor(ev);
      });
  });
}

const changeColor = (ev) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  ev.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  return ev
}

const reset = () => {
  resetBoard.addEventListener("click", (ev) => {
      gridElements.forEach((item) => {
          item.style = null;
      });
  });
}


changeBoard.addEventListener("click", (ev) => {
    cols = prompt("How many cols?");
    rows = prompt("How many rows?");
    createGrid(cols, rows);
})

const starter = () => {
    createGrid();
    reset();
}

starter();


