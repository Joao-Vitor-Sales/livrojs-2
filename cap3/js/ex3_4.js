function horaNaFranca(){
    var inHora = document.getElementById("inHora");
    var outResposta = document.getElementById("outResposta");

    var hora = Number(inHora.value);

    var horaFranca = hora + 5;

    outResposta.textContent = "Hora na Franca: " + horaFranca;
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", horaNaFranca);