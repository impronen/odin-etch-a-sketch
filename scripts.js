/* 




*/
document.body.onload = genGrid(16,16);


function genGrid(v, b){
let e = document.body;

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
