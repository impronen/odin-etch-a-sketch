
//Select div main and set it as constant container
const container = document.querySelectorAll('main'); 

//Create a new div and give it a class
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
//Add new container to main node
main.appendChild(gridContainer);
//Run function on loading page and place resulting rows/column inside gridContainer
container.addEventListener("onload", genGrid(16,16))


//Function to generate a grid
function genGrid(v, b){
let e = gridContainer;

    for(let i = 0; i < v; i++) { //Creates row-divs until number of divs = 1st parameter
        let row = document.createElement("row-divs");
        row.className = "row";

        for(let x = 1; x <= b; x++){ // Creates cell-divs and makes them child of row-divs
            let cell = document.createElement("cell-divs"); // until 2nd parameter is reached
            cell.className = "gridCell";
            cell.innerText = "DUDE";
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}
