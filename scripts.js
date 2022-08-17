const gridContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);
const resetBtn = document.querySelector('.Reset');
const gridManipulation = document.querySelectorAll('gridContainer');
const generateBtn = document.querySelector('.generate');

//Load grid on page load
gridContainer.addEventListener("onload", genGrid(16,16));


let selectGridCell = document.querySelectorAll('.gridCell');
let selectRow = document.querySelectorAll('row');


painting ()

//Generate - deletes the original grid and recreates it
function removeGrid() {
  let rows = document.querySelectorAll('.row');
  for (let i = 0; i < rows.length; i++) {
    const elem = rows[i];
    elem.parentNode.removeChild(elem);
  }

  let cells = document.querySelectorAll('.gridCell');
  for (let i = 0; i < cells.length; i++) {
    const elem = cells[i];
    elem.parentNode.removeChild(elem);
  }

  genGrid(16,16);
selectGridCell = document.querySelectorAll('.gridCell');
selectRow = document.querySelectorAll('row');
}

//Event listener for grid Generate button
generateBtn.addEventListener('click', ()=>{
  removeGrid() //Removes grid and event listeners and recreates the grid
  painting () //Reastablishes the event listener
})

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

//Changes style/class on mouseEnter - 
function painting () {
selectGridCell.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.classList.add('paintedCell');
  })
});
}


//Reset - removes the class added to the grid elements -> grid becomes "clean"
resetBtn.addEventListener('click', ()=>{
  selectGridCell.forEach(function(item) {
    item.classList.remove('paintedCell')
  });
})





// Investigate this: https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners


/*
for reference from https://github.com/TarekVisch/etch-a-sketch
*/



