function calcularNivel(vitorias, derrotas) {
    let resultadodeVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { resultadodeVitorias, nivel };
}


function exibirResultado(resultadodeVitorias, nivel) {
    console.log(`O Herói tem de saldo de ${resultadodeVitorias} está no nível de ${nivel}`);
}

let vitorias = 80;
let derrotas = 20;

let resultado = calcularNivel(vitorias, derrotas);
exibirResultado(resultado.resultadodeVitorias, resultado.nivel);

