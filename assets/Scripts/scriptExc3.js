/*-------------------------------------------------------------------------------------------
---------------------------------------Ejercicio-3-------------------------------------------
--------------------------------------------------------------------------------------------*/
let arrNum2 = [1,2,3,4,10];

function printOutSumProduct(){
    const initialValue = 0;
    const initialValueProduct = 1;

    const sumWithInitial = arrNum2.reduce( (accumulator, currentValue) => accumulator + currentValue,initialValue,);
    const productWithInitial = arrNum2.reduce( (accumulator, currentValue) => accumulator * currentValue,initialValueProduct,);

    console.log("la suma es igual a: " + sumWithInitial);
    console.log("el producto es igual a: " + productWithInitial);

    document.getElementById("solucion-3.1").innerHTML = "la suma es igual a: " + sumWithInitial;
    document.getElementById("solucion-3.2").innerHTML = "el producto es igual a: " + productWithInitial;
}

function clearP3(){
    document.getElementById("solucion-3.1").innerHTML = "";
    document.getElementById("solucion-3.2").innerHTML = "";
}
