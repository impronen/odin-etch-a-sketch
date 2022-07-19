
//Select div main and set it as constant "container"
const container = document.querySelectorAll('main'); 

//Create a new div and give it a class
const gridContainer = document.createElement('div');
gridContainer.classList.add('gridContainer');
//Add new container to main node
main.appendChild(gridContainer);
//Run function on loading page and place resulting rows/column inside gridContainer
container.addEventListener("onload", genGrid(16,16))

const myList = gridContainer.childNodes;


//Function to generate a grid
function genGrid(v, b){
let e = gridContainer;

    for(let i = 0; i < v; i++) { //Creates row-divs until number of divs = 1st parameter
        let row = document.createElement("div");
        row.className = "row";

        for(let x = 1; x <= b; x++){ // Creates cell-divs and makes them child of row-divs
            let cell = document.createElement("div"); // until 2nd parameter is reached
            cell.className = "gridCell";
            // cell.innerText = "D";
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
}

//Function to change cell-div's class

You can't add an event listener to an array of node elements.
You have to loop through them and do it instead.
https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach