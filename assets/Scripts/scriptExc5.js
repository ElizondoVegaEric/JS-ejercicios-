/*-------------------------------------------------------------------------------------------
---------------------------------------Ejercicio-5-------------------------------------------
--------------------------------------------------------------------------------------------*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function printArrays(){
    console.log(people);
    document.getElementById("solucion-5").innerHTML = people;
}

function removeDani(){
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Dani") {
            people.splice(i,1);
        }
    }
}

function removeJuan(){
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Juan") {
            people.splice(i,1);
        }
    }
}

function moveLuis(){
    for (let i = 0; i < people.length; i++) {
        if (people[i] === "Luis") {
            people.splice(i,1);
            people.unshift("Luis")
        }
    }
}

function addName(){
    let name = prompt("¿Cual es tu nombre?");
    people.push(name)
}

function printMaria(){
    clearP5()
    for (let i = 0; i < people.length; i++) {
        console.log(people[i])
        document.getElementById("solucion-5").innerHTML += people[i] + " ";
        if (people[i] === 'Maria') break;
    }
}

function PrintIndexMaria(){
    clearP5()
    for (let i = 0; i < people.length; i++) {
        if (people[i] === 'Maria'){
            console.log(`El index es ${i}`);
            document.getElementById("solucion-5").innerHTML += `El index es ${i} `;
        }
    }
}

function originalArray(){
    people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
}


function clearP5(){
    document.getElementById("solucion-5").innerHTML = "";
}