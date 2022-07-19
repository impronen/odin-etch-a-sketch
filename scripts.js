

const container = document.querySelectorAll('main'); 


const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
main.appendChild(gridContainer);

container.addEventListener("onload", genGrid(16,16))


//Function to generate a grid
function genGrid(v, b){
let e = gridContainer;

    for(let i = 0; i < v; i++) { 
        let row = document.createElement("div");
        row.className = "row";

        for(let x = 1; x <= b; x++){ 
            let cell = document.createElement("div"); 
            cell.className = "gridCell";
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}

//Function to change cell-div's class

/*
You can't add an event listener to an array of node elements.
You have to loop through them and do it instead.
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
*/