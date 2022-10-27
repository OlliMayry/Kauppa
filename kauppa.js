function insertRows(){

var table = document.getElementById("data");

var ostos = document.getElementById('textfield').value;
var määrä  = document.getElementById('textfield2').value;
var hinta = document.getElementById('textfield3').value;
var uusi = (Number(hinta) * Number(määrä)+"€");


function changeBorder(element, to){
    element.style.borderColor = to;
}

let inpu = document.getElementById('textfield');
let input = document.getElementById('textfield2');
let inputo = document.getElementById('textfield3');


if( isNaN(määrä)) {
        alert("Määrän ja hinnan tulee olla numero!");
        changeBorder(input, 'red');
      return false;  
}

if(isNaN(hinta)) {
        alert("Hinnan ja määrän tulee olla numero!");
        changeBorder(inputo, 'red');
        return false;
}
if( ostos == "") {
    alert("Ostos puuttuu!");
    changeBorder(inpu, 'red');
    return false;
}
if( hinta == "") {
    alert("Hinta puuttuu!");
    changeBorder(inputo, 'red');
    return false;
}
if( määrä == "") {
    alert("Määrä puuttuu!");
    changeBorder(input, 'red');
    return false;
}
 else{

    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

cell1.innerHTML = ostos;
cell2.innerHTML = määrä;
cell3.innerHTML = hinta+"€";
cell4.innerHTML = uusi;
cell5.innerHTML = ("<button class = 'btn btn-danger' >X</button>");

let del = document.getElementsByClassName("btn btn-danger");
console.log(del);

 for(let x=0;x<del.length;x++){ 
    var dem = del[x]
     dem.addEventListener('click', function(event) {
        let demClicked = event.target
        demClicked.parentElement.parentElement.remove()  
    }
    )
 }

changeBorder(inpu, '');
changeBorder(input, '');
changeBorder(inputo, '');

localStorage.setItem("Hinta", uusi);

console.log("Saved the data! " + uusi); 
return true;
} 

}


function laskeHinta() {

var table = document.getElementById("data"), sumVal = 0;
for(var i = 1; i < table.rows.length; i++ ) {
    sumVal = sumVal + parseFloat(table.rows[i].cells[3].innerHTML);
}


document.getElementById("myDiv").innerHTML = 'Hinta lopuksi: ' + sumVal + '€';
console.log(sumVal);

}
