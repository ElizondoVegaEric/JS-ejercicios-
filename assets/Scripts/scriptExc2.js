/*-------------------------------------------------------------------------------------------
---------------------------------------Ejercicio-2-------------------------------------------
--------------------------------------------------------------------------------------------*/
let arrNum = [1,2,3,4,10];

function printOutDouble() {
    const map1 = arrNum.map((x)=> x * 2);
    console.log(map1);
    document.getElementById("solucion-2").innerHTML = map1;
}

function clearP2(){
    document.getElementById("solucion-2").innerHTML = "";
}