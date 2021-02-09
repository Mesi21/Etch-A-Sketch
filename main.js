const board = document.getElementById("board");
const newBoard = document.getElementById("reset_btn");
const changeBoard = document.getElementById("grid_size");

const basicGrid = (cols, rows) => {
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    let s = cols * rows;

    for (i = 0; i < s; i++) {
        let item = document.createElement("div");
        item.classList.add("grid-item");
        board.append(item);
    };
    
    gridElements = document.querySelectorAll(".grid-item");
    gridElements.forEach((item) => {
        item.addEventListener("mouseover", (ev) => {
            item.classList.add("current");
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

newBoard.addEventListener("click", (ev) => {
    gridElements.forEach((item) => {
        item.classList.remove("current");
    });
    return ev
});

changeBoard.addEventListener("click", (ev) => {
    gridElements.forEach((item) => {
        item.classList.remove("current");
    });
    cols = prompt("How many cols?");
    rows = prompt("How many rows?");
    basicGrid(cols, rows);
})


basicGrid();