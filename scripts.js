
const gridContainer = document.querySelector('.gridContainer');
let gridValue = document.querySelector('.grid-size');
let gridMeasures = document.querySelector('input');
const resetBtn = document.querySelector('.Reset');
const generate = document.querySelector('.generate');
let squareSize = 8;


const container = document.querySelectorAll('gridContainer'); 

const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);

const gridManipulation = document.querySelectorAll('gridContainer');


container.addEventListener("onload", genGrid(8,8));


//Function to generate a grid
function genGrid(v, b){

    for(let i = 0; i < v; i++) { 
        let row = document.createElement("div");
        row.className = "row";

        for(let x = 1; x <= b; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "gridCell";
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

/* NOT MY CODE - for reference from https://github.com/TarekVisch/etch-a-sketch

// To create square div based on size value handed over by either default or slider

function divGeneration(size) {
  const div = document.createElement('div');
  div.classList.add('gridContainer');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creat The Grid and append it to grid - place previous function inside this one



function gridGeneration(gridMeasures) {
  for (let i = 0; i < gridMeasures; i++) {
    for (let x = 0; x < gridMeasures; x++) {
      gridContainer.appendchild(divGeneration(gridContainer.clientwidth / gridMeasures));
    }
  }
}
*/

//Reset - removes children of the grid div and runs the grid creation again











/*
gridManipulation.forEach((gridContainer) => {

        gridManipulation.addEventListener('click', () => {
            alert(gridManipulation.className);
        });
});

/*
You can't add an event listener to an array of node elements.
You have to loop through them and do it instead.
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
*/