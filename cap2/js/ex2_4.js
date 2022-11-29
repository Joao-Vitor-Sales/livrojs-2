function consumoCliente(){
    var inPreco = document.getElementById("inPreco");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var preco = Number(inPreco.value);
    var consumo = Number(inConsumo.value);

    var precoGrama = preco / 1000;
    var total = precoGrama * consumo;

    outValor.textContent = ("Valor a pagar R$: " + total.toFixed(2));
}

 var btCalcular = document.getElementById("btCalcular");
 btCalcular.addEventListener("click", consumoCliente);