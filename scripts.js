const gridContainer = document.querySelector('.gridContainer');


const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);



const gridManipulation = document.querySelectorAll('gridContainer');


gridContainer.addEventListener("onload", genGrid(16,16));

const selectGridCell = document.querySelectorAll('.gridCell');
const selectRow = document.querySelectorAll('row');

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

//Attempt at a function that would change style on mouseover

/*
for (let i = 0; i < selectGridCell.length; i++) {
  selectGridCell[i].addEventListener('mouseover', function(e){
  if (e.target.matches('gridCell')) {
    e.target.classList.add('activeGridCell');
  }
})};
*/

selectGridCell.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = '#142d4c';
    e.target.style.opacity = 1;
  })
});


/*
//test for looping and changing colour of all cells
for (i = 0; i< selectGridCell.length; i++) {
  selectGridCell[i].classList.add('activeGridCell');
}
*/



/*
selectGridCell.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Hey!')
  document.querySelector('gridCell').style.background = '#ccc';
});
*/

/*
gridManipulation.forEach((gridContainer) => {

  gridContainer.addEventListener('click', () => {
            console.log(gridContainer.className);
            
        });
});
*/

//Event listener - color changer
/*
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});
*/

/*
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
*/

/* NOT MY CODE - for reference from https://github.com/TarekVisch/etch-a-sketch

let gridValue = document.querySelector('.grid-size');
let gridMeasures = document.querySelector('input');
const resetBtn = document.querySelector('.Reset');
const generate = document.querySelector('.generate');
let squareSize = 8;


function divGeneration(size) {
  const div = document.createElement('div');
  div.classList.add('gridContainer');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

function gridGeneration(gridMeasures) {
  for (let i = 0; i < gridMeasures; i++) {
    for (let x = 0; x < gridMeasures; x++) {
      gridContainer.appendchild(divGeneration(gridContainer.clientwidth / gridMeasures));
    }
  }
}
*/

//Reset - removes children of the grid div and runs the grid creation again

