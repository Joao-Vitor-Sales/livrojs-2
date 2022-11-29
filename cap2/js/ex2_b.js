function calcularValor(){
    var inValor = document.getElementById("inValor");   
    var inUso = document.getElementById("inUso");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var uso = Number (inUso.value);

    var calculo = Math.ceil(uso / 15) * valor;

    outValor.textContent = ("Valor a Pagar R$: " + calculo.toFixed(2));
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);