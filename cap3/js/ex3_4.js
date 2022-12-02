function horaNaFranca(){
    var inHora = document.getElementById("inHora");
    var outResposta = document.getElementById("outResposta");

    var hora = Number(inHora.value);

    if (inHora.value == "" || isNaN(hora)){
        alert("Por gentileza, preencher o horário desejado");
        inHora.value = "";
        inHora.focus();
        return;
    }

    var horaFranca = hora + 5;

    outResposta.textContent = "Hora na Franca: " + horaFranca;
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", horaNaFranca);