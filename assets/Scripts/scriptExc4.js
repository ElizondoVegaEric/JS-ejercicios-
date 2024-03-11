/*-------------------------------------------------------------------------------------------
---------------------------------------Ejercicio-4-------------------------------------------
--------------------------------------------------------------------------------------------*/

function compareArrays(){
    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    for (let i = 0; i < student1Courses.length; i++) {
        
        if (student2Courses.includes(student1Courses[i])) {
        console.log(student1Courses[i]);
        document.getElementById("solucion-4").innerHTML += student1Courses[i] + " " ;
        }
    }
}

function clearP4(){
    document.getElementById("solucion-4").innerHTML = "";
}