window.onload = function () {


    const squareContainer = document.getElementById('container');
    const btn = document.getElementById('newGridBtn');
    const gridWidth = 1100

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'square');
        div.style.cssText = 'border-style: solid; border-width: 3px; width: 50px; height: 50px; margin: 5px;'
        squareContainer.appendChild(div);
        
    }

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

    let squareDiv = document.querySelectorAll('#square');

    btn.addEventListener('click', () => {
        createNewGrid(parseInt(prompt('Enter a number')));
    });

    squareDiv.forEach(squareDiv => squareDiv.addEventListener('mouseover', () => {
        squareDiv.style.backgroundColor = 'black';
    }));


   


    



}