function calcularPromocao(){
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outPreco = document.getElementById("outPreco");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var preco50 = preco * 0.5
    var promocao = (preco * 2) + preco50;

    outProduto.textContent = (produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2));
    outPreco.textContent = ("O 3° produto custa apenas R$: " + preco50);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromocao);