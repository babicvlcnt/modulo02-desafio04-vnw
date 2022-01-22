function mensagem(){
    console.log("Olá, mundo!")
}
mensagem()

function nome(nome){
    console.log(`Meu nome é ${nome}`)
}
nome("Bárbara")

function mensagem(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e adoro ouvir ${estiloMusical}`)
}
mensagem("Enarê", 25, "Sertanejo raíz")

function mensagem(filme, música){
    console.log(`O ${filme} estreiou nos cinemas essa semana, ele conta a história da música ${música}, do Renato Russo`)
}
mensagem("filme Eduardo e Mônica", "Eduardo e Mônica")

function triple(number){
    return number*3
}
console.log(triple(2))