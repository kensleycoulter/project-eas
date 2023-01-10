const defaultSize = 16;
//const defaultMode = 'black';
//const defaultColor = 'black'
let color = 'black';
let click = true;
let size;

let colorPicker = document.querySelector('#color-picker');

let slider = document.querySelector('.slider');
let sizeValue = document.querySelector('.size-value');
slider.addEventListener('mouseup', changeSize);
sizeValue.innerHTML = `${defaultSize} X ${defaultSize}`;

slider.oninput = function getOutputValue () {
    updatedGridSize = this.value 
    sizeValue.innerHTML = `${updatedGridSize} X ${updatedGridSize}`
     } 

console.log(color);
//colorPicker.addEventListener('input', userColorSelection, false); 

//sizeValue.onmousemove = (e) => updateSizeValue(e.target.size);


//slider.onchange = (e) => changeSize(e.target.size);
   
  /*   slider.oninput = function getOutputValue () {
 sizeValue.innerHTML = this.value.toString();
 }   */

 //sizeValue.innerHTML = `${value} X ${value}`;


function createBoard(size) {

    console.log(size);

let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
board.style.boxShadow = '5px 5px 5px 5px grey';

/*slider.addEventListener('input', function ()  {
    gridSize = output.innerHTML * output.innerHTML; 
}) */

let gridSize = size * size;

for(let i = 0; i < gridSize; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.classList.add('square');
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
    
  }
}

function changeSize() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    //updateSizeValue();
    //setCurrentSize();
    createBoard(slider.value);
    //console.log(size);
}

//createBoard(16);

 
/* function setCurrentSize(newSize) {
    size = newSize;
    console.log(size);
}  */


function colorSquare () {   
  if(click) {  
    if (color === 'rainbow'){
        this.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2,8)
    } else {
     this.style.backgroundColor = color;
    }
    }
}

function changeColor(choice){
    color = choice;
} 

function userColorSelection(event){
    color = event.target.value;
    console.log(color)
}

/* function setCurrentColor(newColor){
    color = newColor; 
    console.log(color)
    console.log(newColor)
} */

function reloadGrid () {
    clearBoard();
    createBoard(size);
}

function clearBoard () {
    const board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('.board').addEventListener('click', () => {
    click = !click;
})


window.onload = () => {
    createBoard(defaultSize);
}