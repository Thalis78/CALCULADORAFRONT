function um() {
    document.getElementById("texto").value += '1';
}

function dois() {
    document.getElementById("texto").value += '2';
}

function tres() {
    document.getElementById("texto").value += '3';
}

function quatro() {
    document.getElementById("texto").value += '4';
}

function cinco() {
    document.getElementById("texto").value += '5';
}

function seis() {
    document.getElementById("texto").value += '6';
}

function sete() {
    document.getElementById("texto").value += '7';
}

function oito() {
    document.getElementById("texto").value += '8';
}

function nove() {
    document.getElementById("texto").value += '9';
}

function zero() {
    document.getElementById("texto").value += '0';
}

function simboloSoma() {
    document.getElementById("texto").value += '+';
}

function simboloSub() {
    document.getElementById("texto").value += '-';
}

function simboloMult() {
    document.getElementById("texto").value += '*';
}

function simboloDiv() {
    document.getElementById("texto").value += '/';
}
function ponto(){
    document.getElementById("texto").value +='.';
}
function calcular() {
    var input = document.getElementById("texto").value;
    var resultado = eval(input); 
    document.getElementById("texto").value = resultado;
}
