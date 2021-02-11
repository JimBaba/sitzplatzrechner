// inputs: Anzahl Tickets, größe Sitzreihen, anzahl freie sitze zwischen buchungen
// basierend auf den Daten der Excel https://docs.google.com/spreadsheets/d/1OHr3f8Sabv2p-dN7lVkaXRAgftjXPo9wxmO2Q43B3TI/edit#gid=2136586941
// berechnet das Programm die effizienteste aufteilung der sitze je nach angegebener 
// länge der reihen

const divCont = document.getElementById("grid-container")


let fullHouse = prompt("Gesamtkapazität des Konzerts?")
let tickets = prompt("wieviele Tickets wurden verkauft?")
let rowLength = prompt("Wie lang sind die Sitzreihen?")
let freeSpace = prompt("wieviele Sitze frei zwischen den Gästen?")
400

let ticket1 = Math.floor(tickets/100 * 15);
let ticket2 = Math.floor(tickets/100 * 63);
let ticket3 = Math.floor(tickets/100 * 11.5);
let ticket4 = Math.floor(tickets/100 * 6);
let ticket5 = Math.floor(tickets/100 * 1.5);
let ticket6 = Math.floor(tickets/100 * 1);
let ticket7 = Math.floor(tickets/100 * 0.5);
let ticket8 = Math.floor(tickets/100 * 0.1);
let ticket9 = Math.floor(tickets/100 * 0.05);
let ticket10 = Math.floor(tickets/100 * 0.05);

console.log(ticket1,ticket2,ticket3,ticket4,ticket5,ticket6,ticket7,ticket8,ticket9,ticket10)

let rowCount = fullHouse / rowLength;

function makeGrid(rows, cols) {
    
    divCont.style.setProperty("--grid-rows",rows);
    divCont.style.setProperty("--grid-cols", cols);
    
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        divCont.appendChild(cell).className = "grid-area";
    }

}

function gridMaker(rowCount){
    for(let i = 1; i <= 1; i++){
        makeGrid(rowCount,1);
    }
}

gridMaker(rowCount);400
