const gridContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);
const resetBtn = document.querySelector('.Reset');
const gridManipulation = document.querySelectorAll('gridContainer');

const generateLarge = document.querySelector('.big');
const generateNormal = document.querySelector('.normal');
const generateSmall = document.querySelector('.small');

//Load grid on page load
gridContainer.addEventListener("onload", genGrid(20,20));


let selectGridCell = document.querySelectorAll('.gridCell');
let selectRow = document.querySelectorAll('row');
painting ()

//Deletes the original grid and recreates it
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

}

//Event listener for grid Generate button
generateLarge.addEventListener('click', ()=>{
  removeGrid() //Removes grid and event listeners
  genGrid(27,27);
  selectGridCell = document.querySelectorAll('.gridCell');
  selectRow = document.querySelectorAll('row'); 
  selectGridCell.forEach(function(item) {
    item.classList.add('gridCellLarge')
  });
  painting () //Reastablishes the event listener
})

generateNormal.addEventListener('click', ()=>{
  removeGrid() //Removes grid and event listeners
  genGrid(20,20);
  selectGridCell = document.querySelectorAll('.gridCell');
  selectRow = document.querySelectorAll('row'); 
  painting () //Reastablishes the event listener
})

generateSmall.addEventListener('click', ()=>{
  removeGrid() //Removes grid and event listeners
  genGrid(10,10);
  selectGridCell = document.querySelectorAll('.gridCell');
  selectRow = document.querySelectorAll('row'); 
  selectGridCell.forEach(function(item) {
    item.classList.add('gridCellSmall')
  });
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

