// inputs: Anzahl Tickets, größe Sitzreihen, anzahl freie sitze zwischen buchungen
// basierend auf den Daten der Excel https://docs.google.com/spreadsheets/d/1OHr3f8Sabv2p-dN7lVkaXRAgftjXPo9wxmO2Q43B3TI/edit#gid=2136586941
// berechnet das Programm die effizienteste aufteilung der sitze je nach angegebener 
// länge der reihen


function startGrid(){


    const divCont = document.getElementById("grid-container");
    const introTickets = document.getElementById("ticket");
    const ticketIntro1 = document.getElementById("1ticket")
    const ticketIntro2 = document.getElementById("2ticket")
    const ticketIntro3 = document.getElementById("3ticket")
    const ticketIntro4 = document.getElementById("4ticket")
    const ticketIntro5 = document.getElementById("5ticket")
    const ticketIntro6 = document.getElementById("6ticket")
    const ticketIntro7 = document.getElementById("7ticket")
    const ticketIntro8 = document.getElementById("8ticket")
    const ticketIntro9 = document.getElementById("9ticket")
    



let fullHouse = document.getElementById("cap").value;
let tickets = document.getElementById("vk").value;
let rowLength = document.getElementById("rowL").value;
let freeSpace = document.getElementById("free").value;

let ticket1 = Math.floor(tickets/100 * 15);
let ticket2 = Math.floor(tickets/100 * 63);
let ticket3 = Math.floor(tickets/100 * 11.5);
let ticket4 = Math.floor(tickets/100 * 6);
let ticket5 = Math.floor(tickets/100 * 1.5);
let ticket6 = Math.floor(tickets/100 * 1);
let ticket7 = Math.floor(tickets/100 * 0.5);
let ticket8 = Math.floor(tickets/100 * 0.1);
let ticket9 = Math.floor(tickets/100 * 0.05);

console.log(ticket1,ticket2,ticket3,ticket4,ticket5,ticket6,ticket7,ticket8,ticket9)

function addIntro(){

let explain = document.createElement("p");
explain.innerHTML = "Bei einer Auslastung von " + fullHouse + " setzen sich die Ticketbestellmengen im Schnitt wie zusammen: ";
introTickets.appendChild(explain).setAttribute("id","intro");

let t1 = document.createElement("p");
t1.innerHTML = "1 Ticket: x" + ticket1;
ticketIntro1.appendChild(t1).setAttribute("id", "tc");

let t2 = document.createElement("p");
t2.innerHTML = "2 Tickets: x" + ticket2;
ticketIntro2.appendChild(t2).setAttribute("id", "tc");

let t3 = document.createElement("p");
t3.innerHTML = "3 Tickets: x" + ticket3;
ticketIntro3.appendChild(t3).setAttribute("id", "tc");

let t4 = document.createElement("p");
t4.innerHTML = "4 Tickets: x" + ticket4;
ticketIntro4.appendChild(t4).setAttribute("id", "tc");

let t5 = document.createElement("p");
t5.innerHTML = "5 Tickets: x" + ticket5;
ticketIntro5.appendChild(t5).setAttribute("id", "tc");

let t6 = document.createElement("p");
t6.innerHTML = "6 Tickets: x" + ticket6;
ticketIntro6.appendChild(t6).setAttribute("id", "tc");

let t7 = document.createElement("p");
t7.innerHTML = "7 Tickets: x" + ticket7;
ticketIntro7.appendChild(t7).setAttribute("id", "tc");

let t8 = document.createElement("p");
t8.innerHTML = "8 Tickets: x" + ticket8;
ticketIntro8.appendChild(t8).setAttribute("id", "tc");

let t9 = document.createElement("p");
t9.innerHTML = "9 Tickets: x" + ticket9;
ticketIntro9.appendChild(t9).setAttribute("id", "tc");

}

divCont.addEventListener("mousedown", transformCells);


let btn = document.querySelectorAll("input")
btn.forEach(colorBtn => colorBtn.addEventListener("click", colorPicker));

let color = "red";

function colorPicker(e){
    color = e.target.id;
    return color;
}

function transformCells(e){
    if(e.target.className == "gc"){
        return
    } else {
    e.target.style.backgroundColor = color;
    
    }
}

function makeGrid(rows, cols) {
        
    divCont.style.setProperty("--grid-rows",rows);
    divCont.style.setProperty("--grid-cols", cols);
    
    for(let i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        divCont.appendChild(cell).className = "grid-area";
    }

}

let rowCount = fullHouse / rowLength;

function gridMaker(rowCount){
    for(let i = 1; i <= 1; i++){
        makeGrid(rowCount,rowLength);
    }
}

addIntro();
gridMaker(rowCount);

}
