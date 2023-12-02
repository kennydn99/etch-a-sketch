let grid = document.querySelector('.container');
let isRGBmode = false;

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

let removeGrid = function () {
    let currentSquares = document.querySelectorAll('div.square');
    currentSquares.forEach((box) => {
        box.remove();
    });
};

let setHover = function () {
    let allSquares = grid.querySelectorAll('div.square');
    allSquares.forEach((item) => {
        item.opacity = 0.1;
        item.addEventListener('mouseenter', () => {
            if(isRGBmode) {
                item.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${item.opacity})`;
            } else {
                item.style.backgroundColor = `rgba(0, 0, 0, ${item.opacity})`;
            }
            item.opacity += 0.1;
            
        });
    });
    
};

let clearBtn = document.querySelector('#clear-btn');
let clearGrid = function () {
    let currentSquares = document.querySelectorAll('div.square');
    currentSquares.forEach((box) => {
        box.opacity = 0.1;
        box.style.backgroundColor = "white";
    });
};
clearBtn.addEventListener('click', clearGrid);

let gridSizeBtn = document.querySelector('#grid-size-btn');
gridSizeBtn.addEventListener('click', () => {
    let newNumOfSquaresPerSide, invalidInput;
    do {
        let selection = prompt("Pick a number of squares per side for the grid! Pick from 1-100");
        newNumOfSquaresPerSide = parseInt(selection, 10);
        invalidInput = (newNumOfSquaresPerSide < 1 || newNumOfSquaresPerSide > 100 || isNaN(newNumOfSquaresPerSide));
        if (selection === null) {
            break;
        } else if (!invalidInput) {
            removeGrid();
            createGrid(newNumOfSquaresPerSide);
            setHover();
        }
    } while (invalidInput);
});

let rgbBtn = document.querySelector('#rgb-btn');
rgbBtn.addEventListener('click', () => isRGBmode = true);

let bwBtn = document.querySelector('#bw-btn');
bwBtn.addEventListener('click', () => isRGBmode = false);


//initialize grid to 16x16 when page loads
let numSquaresPerSide = 16;
createGrid(16);
setHover();