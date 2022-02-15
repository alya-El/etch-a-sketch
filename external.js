const pixelCanvas = document.querySelector('.pixel-canvas');
const slider = document.querySelector('.grid-size');
const rangeValue = document.querySelector('.range-value');

const black = document.querySelector('.black');

window.onload = makeGrid(16);

slider.addEventListener("change", function(){
    resetGrid();
});

black.addEventListener("click", function(){
    colorBlack();
});

function resetGrid(){
    let gridSize = slider.value;

    if(gridSize <= 100 && gridSize >= 1){
        clearGrid();
        makeGrid(gridSize);
    }
};

function makeGrid(size){
    rangeValue.style.cssText = "font-size: 25px; margin-left: 10px;";
    rangeValue.innerHTML = size;

    pixelCanvas.style.cssText = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`;

    for(let i = 0; i < (size * size); i++){
        let box = document.createElement('div');
        box.className = "box" + i;
        box.style.cssText = "border: 1px dashed #E9E9E9;";

        pixelCanvas.appendChild(box);
    };
};

function clearGrid(){
    pixelCanvas.innerHTML = '';
};

function colorBlack(){
    
};