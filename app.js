let grid = document.querySelector('.container');

let numSquaresPerSide = 16;

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            grid.appendChild(square);
        }
    }
};