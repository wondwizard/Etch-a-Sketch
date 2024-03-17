window.onload = function () {

    const squareContainer = document.getElementById('container');
    const btn = document.getElementById('newGridBtn');
    const gridWidth = 1100
    const btnReset = document.getElementById('reset');
    let squareDiv = document.querySelectorAll('#square');


    function createNewGrid(num) {
        while (squareContainer.lastElementChild) {
            squareContainer.removeChild(squareContainer.lastElementChild);
        }
        for (let i = 0; i < (num*num); i++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'square');
            div.style.width = `${gridWidth/num}px`;
            div.style.height = `${gridWidth/num}px`;
            div.style.backgroundColor = 'blue';
            div.style.outline = '5px solid red';
            squareContainer.appendChild(div);  
        }
        squareDiv = document.querySelectorAll('#square');
        squareDiv.forEach(squareDiv => squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = 'black';
        }));
    }

    function resetSquares() {
        squareDiv.forEach(squareDiv => {
            squareDiv.style.backgroundColor = 'blue';
        });        
    }

    btn.addEventListener('click', () => {
        let input = parseInt(prompt('Enter a number'));
        if (input < 50) {
            createNewGrid(input);
        } else {
            alert('Number is higher than 50, please try again');
        }
        
    });

    btnReset.addEventListener('click', () => {
        resetSquares();
    });

    createNewGrid(16);


   


    



}