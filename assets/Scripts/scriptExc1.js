/*-------------------------------------------------------------------------------------------
---------------------------------------Ejercicio-1-------------------------------------------
--------------------------------------------------------------------------------------------*/
let arrSentence = ["This", "is", "a", "sentence."];

function printOutString() {
    // your code here
    console.log(arrSentence.join(" "));
    document.getElementById("solucion-1").innerHTML = arrSentence.join(" ");
}

function clearP1(){
    document.getElementById("solucion-1").innerHTML = "";
}
