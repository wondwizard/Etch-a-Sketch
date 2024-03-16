window.onload = function () {


    const squareContainer = document.getElementById('container');

    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', 'square');
        div.style.cssText = 'border-style: solid; border-width: 3px; width: 50px; height: 50px; margin: 5px;'
        squareContainer.appendChild(div);
        
    }



    



}