function addnum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = parseInt(a) + parseInt(b);
    document.getElementById("answer").innerHTML = "Sum: "+c;
}
function subnum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = parseInt(a) - parseInt(b);
    document.getElementById("answer").innerHTML = "Difference: "+c;
}
function mulnum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = parseInt(a) * parseInt(b);
    document.getElementById("answer").innerHTML = "Product: "+c;
}
function divnum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = parseInt(a) / parseInt(b);
    document.getElementById("answer").innerHTML = "Quotient: "+c;
}
function remnum(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = parseInt(a) % parseInt(b);
    document.getElementById("answer").innerHTML = "Remainder: "+c;
}