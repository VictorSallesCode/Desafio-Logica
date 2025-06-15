let username = getfirstname("Victor Barcelos Salles")
console.log("Seja bem vindo " + username)

username = getfirstname("Felipe-Silva-han-Solo" , "-")
console.log("Seja bem vindo " + username)

function getfirstname(name, splitchar){
    let firstname = name.split(splitchar)[0]
    return firstname
// função com retorno e vetorização por espaço, pode ser utilizado também - entre outros separadores, vetorizando e podendo ser escolhido somente uma parte do dado.
}
