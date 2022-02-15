const pixelCanvas = document.querySelector('.pixel-canvas');
const slider = document.querySelector('.grid-size');
const rangeValue = document.querySelector('.range-value');

//selection buttons
const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const erase = document.querySelector('.erase');
const clear = document.querySelector('.clear');

//load initial 16x16 grid
window.onload = makeGrid(16);

//resets grid size when slider is adjusted
slider.addEventListener("change", function(){
    resetGrid();
});

black.addEventListener("click", function(){
    black.style.cssText = "background-color: pink;";
    rainbow.style.cssText = "background-color: white;";
    erase.style.cssText = "background-color: white;";

    colorBlack();
});

rainbow.addEventListener("click", function(){
    rainbow.style.cssText = "background-color: pink;";
    black.style.cssText = "background-color: white;";
    erase.style.cssText = "background-color: white;";
  
    colorRainbow();
});

erase.addEventListener("click", function(){
    erase.style.cssText = "background-color: pink;";
    rainbow.style.cssText = "background-color: white;";
    black.style.cssText = "background-color: white;";
   
    eraseCanvas();
});

clear.addEventListener("click", function(){
    clearCanvas();
});

function resetGrid(){
    let gridSize = slider.value;

    if(gridSize <= 100 && gridSize >= 1){
        clearGrid();
        makeGrid(gridSize);
    }
};
//creates a grid according to given size
function makeGrid(size){
    rangeValue.style.cssText = "font-size: 25px; margin-left: 10px;";
    rangeValue.innerHTML = size;

    pixelCanvas.style.cssText = `grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto);`;

    for(let i = 0; i < (size * size); i++){
        let box = document.createElement('div');
        box.className = "box";
        box.style.cssText = "border: 1px dashed #E9E9E9;";

        pixelCanvas.appendChild(box);
    };
};

function clearGrid(){
    pixelCanvas.innerHTML = '';
};
//clears the whole canvas
function clearCanvas(){
    let nodes = pixelCanvas.childNodes;

    for(let i = 0; i < nodes.length; i++){
        nodes[i].style.cssText = "border: 1px dashed #E9E9E9; background-color: white;";
    }
};
//erases color on canvas
function eraseCanvas(){
    pixelCanvas.addEventListener("mouseout", function(e){
        if(e.target.className === 'box')
            e.target.style.cssText = "border: 1px dashed #E9E9E9; background-color: white;";
    });
};
//paints canvas using blank color
function colorBlack(){
    pixelCanvas.addEventListener("mouseout", function(e){
        if(e.target.className === 'box')
            e.target.style.cssText = "background-color: black;";
    });
};
//paints canvas using randomly genereated colors
function colorRainbow(){
    pixelCanvas.addEventListener("mouseout", function(e){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(e.target.className === 'box')
            e.target.style.cssText = `background-color: #${randomColor};`;
    });
};