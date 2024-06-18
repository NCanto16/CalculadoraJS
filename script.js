function soma() {
    let n1 = Number(document.getElementById("numero1").value)
    let n2 = Number(document.getElementById("numero2").value)
    let soma= n1 + n2;
    document.getElementById("final").innerHTML= "o resultado do calculo é: " + soma;
}

function subtracao() {
    let n1 = Number(document.getElementById("numero1").value)
    let n2 = Number(document.getElementById("numero2").value)
    let subtracao= n1 - n2;
    document.getElementById("final").innerHTML= "o resultado do calculo é: " + subtracao;
}

function multiplicacao() {
    let n1 = Number(document.getElementById("numero1").value)
    let n2 = Number(document.getElementById("numero2").value)
    let multiplicacao= n1 * n2;
    document.getElementById("final").innerHTML= "o resultado do calculo é: " + multiplicacao;
}

function divisao() {
    let n1 = Number(document.getElementById("numero1").value)
    let n2 = Number(document.getElementById("numero2").value)
    let divisao= n1 / n2;
    document.getElementById("final").innerHTML= "o resultado do calculo é: " + divisao;
}
// comentario555