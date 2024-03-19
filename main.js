const squareContainer = document.getElementById('container');
const newGridBtn = document.getElementById('newGridBtn');
const resetBtn = document.getElementById('resetBtn');
const shadeBtn = document.getElementById('shadeBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const gridWidth = 1100;


//Grid Functions
function createGrid(num) {
    for (let i = 0; i < (num*num); i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'grid');
        div.style.width = `${gridWidth/num}px`;
        div.style.height = `${gridWidth/num}px`;
        div.style.outline = '5px solid lightblue';
        div.style.backgroundColor = 'rgb(255,255,255)';
        squareContainer.appendChild(div);
    }
}

function clearGrid() {
    while (squareContainer.lastElementChild) {
        squareContainer.removeChild(squareContainer.lastElementChild);
    }
}

function resetGrid() {
    let grid = document.querySelectorAll('#grid');
    grid.forEach(grid => {
        grid.style.backgroundColor = 'rgb(255,255,255)';
    }); 
    addMouseOver(blackGrid());
}

function newGrid() {
    let input = parseInt(prompt('Enter a number that is less than 50'));
    if (input > 51 || input < 2 || !input) {
        alert('wrong answer try again');
    } else {
        clearGrid();
        createGrid(input);
        addMouseOver(blackGrid());
    }
}


//Color Functions
function blackGrid(e) {
    return function(e) {
        e.target.style.backgroundColor = 'rgb(0,0,0)';
    }
}

function randomInt(min = 0, max = 255) {
    return Math.floor(Math.random() * (max-min)) + min;
    
}

function randomColor() {
    return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
}

function rainbowGrid(e) {
    return function(e) {
        e.target.style.backgroundColor = randomColor();
    }
}

function shadeGrid(e) {
    let dark = 255;
    return function(e) {
        dark -= 25;
        e.target.style.backgroundColor = `rgb(${dark}, ${dark}, ${dark})`;
    }    
}


//mouseOver
function addMouseOver(color) {
    let grid = document.querySelectorAll('#grid');
    grid.forEach(grid => grid.addEventListener('mouseover', color));

}


//Function for first load
function init() {
    createGrid(16);
    addMouseOver(blackGrid());
}


//Button clicks
newGridBtn.addEventListener('click', function() {
    newGrid();
});

resetBtn.addEventListener('click', function() {
    resetGrid();
});

rainbowBtn.addEventListener('click', function() {
    addMouseOver(rainbowGrid());
});

shadeBtn.addEventListener('click', function() {
    grid = document.querySelectorAll('#grid');
    grid.forEach(grid => grid.addEventListener('mouseover', shadeGrid()));
});



window.addEventListener('load', init());