function calcularMedia(){
    // cria referência aos elementos da página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    // obtém os conteúdos dos campos de edição da página
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    // calcula a média das notas
    var media = (nota1 + nota2) / 2;

    // apresenta a média (altera o conteúdo do elemento outMedia)
    outMedia.textContent = ("Média das Notas: " + media.toFixed(1));

    // cria a condição
    if (media >= 7){
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado!";
        outSituacao.style.color = "green"
    } else if (media >= 4){
        outSituacao.textContent = "Atenção " + nome + ". Você está em exame!";
        outSituacao.style.color = "blue";
    } else {
        outSituacao.textContent = "Ops " + nome + "... Você foi reprovado!";
        outSituacao.style.color = "red";
    }
}

// cria uma referência ao elemento btResultado (botão)
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);