/*
const container = document.querySelector('#main');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
*/

// 
// give a variable for the main container


const container = document.querySelectorAll('main');

const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
gridContainer.addEventListener

main.appendChild(gridContainer);

container.addEventListener("onload", genGrid(16,16))

function genGrid(v, b){
let e = gridContainer;

    for(let i = 0; i < v; i++) {
        let row = document.createElement("row-divs");
        row.className = "row";

        for(let x = 1; x <= b; x++){
            let cell = document.createElement("cell-divs");
            cell.className = "gridCell";
            cell.innerText = "DUDE";
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}
