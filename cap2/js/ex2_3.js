function promocao(){
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outSaldo = document.getElementById("outSaldo");

    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    var entrada = preco / 2;
    var saldo = entrada / 12;

    outVeiculo.textContent = ("Promoção: " + veiculo);
    outEntrada.textContent = ("Entrada de R$: " + entrada.toFixed(2));
    outSaldo.textContent = ("+ 12x de R$: " + saldo.toFixed(2));
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", promocao);