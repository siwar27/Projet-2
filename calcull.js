function forclear() {
    document.getElementById("output").innerHTML = "0";
    
}


function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}



function test() {      /*getElement:pour cibler un elemnt dans un document*/
    var value = document.getElementById("output").innerHTML;      /*recuperer tout les elemnts dans cette classe HTML*/
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}


function fordisplay(value) {
    test()
    document.getElementById("output").innerHTML += value;
  
}


function pui(){
    var value = document.getElementById("output").innerHTML;
    value = value*value;
    document.getElementById("output").innerHTML = value;

}


function sqrt(){
    var value = document.getElementById("output").innerHTML;
    value = Math.sqrt(value);
    document.getElementById("output").innerHTML = value;

}
function pi(){
    var value = document.getElementById("output").innerHTML;
    value = value+Math.PI;
    document.getElementById("output").innerHTML = value;

}


function fact(){
    var value = document.getElementById("output").innerHTML;
    var F=1;
    for(var i=1;i<=value;i++){
        F=F*i;
    }
    document.getElementById("output").innerHTML = F;
}



function egale() {
    test()
    var equation = document.getElementById("output").innerHTML;
    var resl = eval(equation);
    document.getElementById('output').innerHTML = resl;
}


