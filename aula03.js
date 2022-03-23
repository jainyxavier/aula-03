var numeroSecreto = parseInt(Math.random() * 11)

function chutar() {

    var chute = parseInt(document.getElementById("valor").value)
    console.log(numeroSecreto)
    console.log(chute)

    if(chute == numeroSecreto) {
        alert("Acertou!")
    } else if(chute > 10 || chute < 0){
        alert("Digite um número de 0 a 10.")
    } else{
        dica(chute)
    }

}

function dica(chute){
    if(chute > numeroSecreto){
        alert("Errou, o número digitado é maior do que a resposta!")
    } else{
        alert("Errou, o número digitado é menor do que a resposta!")
    }
}