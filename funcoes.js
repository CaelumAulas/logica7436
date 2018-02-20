function formataNumeroQuebrado(numeroQuebrado) {
    return numeroQuebrado.toFixed(2).replace(".",",");
}
function pegaNumeroDecimalDaTela(mensagem) {
        return parseFloat(prompt(mensagem).replace(",","."));
}
