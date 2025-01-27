torrar()

function torrar(){
    console.log("Torrando pão")
    injetarpao()
}
function injetarpao(){
    console.log("preparando para injetar o pão")
    console.log("finalizado")
}

cozinhar("pão integral" ,"felipe", 10.90)

function cozinhar(pao, nome = "cliente", valor){
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + nome)
    console.log("O valor total é " + valor)
}