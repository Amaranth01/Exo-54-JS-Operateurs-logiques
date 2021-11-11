let x = 1;
let y = 4;
let z= -1;

let p1 = document.getElementById('p1')
if (x < 2){
    p1.innerHTML= "x est plus petit que 2";
}

let p2= document.getElementById('p2')
if (y > 3) {
    p2.innerHTML= "y est plus grand que 3";
}

let p3= document.getElementById('p3')
if  (z <= 0) {
    p3.innerHTML= "z est inférieur ou égal à 0";
}

let p4= document.getElementById('p4')
if (x < 2 && y > 3 && z <= 0) {
    p4.innerHTML= "x est plus petit que 2 y plus grand que 3 et z inférieur ou égal à 0";
}

let p5= document.getElementById('p5')
if (x < 2 && y > 3 || z <= 0) {
    p5.innerHTML= "x est plus petit que 2 y plus grand que 3 OU z inférieur ou égal à 0";
}