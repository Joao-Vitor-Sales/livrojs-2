function descontoCentavos(){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outValor = document.getElementById("outValor");
    var outMedicamento = document.getElementById("outMedicamento")

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    var valor = Math.floor(preco + preco);

    outMedicamento.textContent = ("Promoção de " + medicamento);
    outValor.textContent = ("Leve 2 por apenas RS: " + valor.toFixed(2));
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", descontoCentavos);