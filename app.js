let grid = document.querySelector('.container');

let numSquaresPerSide = 16;

function createGrid(num) {
    let squareLength = grid.clientWidth / num;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', `width: ${squareLength}px; height: ${squareLength}px;`);
            grid.appendChild(square);
        }
    }
};

createGrid(16);

let squareColor = "black";

const allSquares = grid.querySelectorAll('div.square');
allSquares.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = squareColor;
    });
});

//clear grid function
let clearBtn = document.querySelector('#clear-btn');
let clearGrid = function () {
    let currentSquares = document.querySelectorAll('div.square');
    currentSquares.forEach((box) => {
        box.remove();
    });
};

clearBtn.addEventListener('click', clearGrid);


let gridSizeBtn = document.querySelector('#grid-size-btn');
//prompt for numSquaresPerSide
//clear grid
//create new grid