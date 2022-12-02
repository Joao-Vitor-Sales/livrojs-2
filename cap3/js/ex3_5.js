function calcularRaiz(){
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(Math.sqrt(inNumero.value));

    outResposta.textContent = ("A Raiz é: " + numero);
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);