/*-------------------------------------------------------------------------------------------
---------------------------------------Ejercicio-6-------------------------------------------
--------------------------------------------------------------------------------------------*/

function bubleArray(){
    let arrBubble =  [3, 6, 12, 5, 100, 1];
    let temp1;
    let temp2;
  
    for (let i = 0; i < arrBubble.length; i++) {
  
      for(let j =0; j < arrBubble.length; j++){
          if(arrBubble[j]>arrBubble[j+1]){
              temp1 = arrBubble[j];
              temp2 = arrBubble[j+1];
              arrBubble[j] = temp2;
              arrBubble[j+1] = temp1;
              console.log("test " + arrBubble);
          }
      }
  }
    console.log(arrBubble);
    document.getElementById("solucion-6").innerHTML = arrBubble ;
  }
  
  function clearP6(){
      document.getElementById("solucion-6").innerHTML = "";
  }