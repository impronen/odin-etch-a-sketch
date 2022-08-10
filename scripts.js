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


//Changes style on mouseEnter - 
selectGridCell.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = '#142d4c';
    e.target.style.opacity = 1;
  })
});

// Shoudl this be changed so it works by setting a class --> classList.replace()
//With this, reset function woul be classList.remove() 

//Reset - sets the grid back to defaul colour






/*
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});
*/

resetBtn.addEventListener('click', reset);

/*
for reference from https://github.com/TarekVisch/etch-a-sketch
*/



