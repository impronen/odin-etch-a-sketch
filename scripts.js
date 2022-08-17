const gridContainer = document.querySelector('.gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid');
gridContainer.appendChild(grid);
const resetBtn = document.querySelector('.Reset');
const gridManipulation = document.querySelectorAll('gridContainer');

//Load grid on page load
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


//Changes style/class on mouseEnter - 
selectGridCell.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.classList.add('paintedCell');
  })
});


//Reset - removes the class added to the 

resetBtn.addEventListener('click', ()=>{
  selectGridCell.forEach(function(item) {
    item.classList.remove('paintedCell')
  });
})

// Investigate this: https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners


/*
for reference from https://github.com/TarekVisch/etch-a-sketch
*/



