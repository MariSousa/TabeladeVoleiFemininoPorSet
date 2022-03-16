// variaveis com elementos do html
//input
var nomeTime = document.getElementById('nomeTime')
var ultimaPontuacao = document.getElementById('ultimaPontuacao')
var setTime = document.getElementById('setTime')
var setTimeAdversario = document.getElementById('setTimeAdversario')

//botoes
var adicionarTime = document.getElementById('adicionarTime')
var calcularPontuacao = document.getElementById('calcularPontuacao')
var limparTabela = document.getElementById('limparTabela')

//paragrafo para exibir resultado
var exibirResultadoP = document.getElementById('exibirResultadoP')
var dadosInput = document.getElementById('dadosInput')

//objeto para o time
var timeVolei = new Object()

//função para adicionar o time
adicionarTime.addEventListener('click', function(){

    timeVolei.nome = nomeTime.value
    timeVolei.ultimaPontuacao = Number(ultimaPontuacao.value)
    timeVolei.setFechado = Number(setTime.value)
    timeVolei.setAdversário = Number(setTimeAdversario.value)
    console.log(timeVolei)

    if(timeVolei.nome =='' && timeVolei.ultimaPontuacao =='' && timeVolei.setFechado == '' && timeVolei.setAdversário ==''){         
        alert ('[ERRO] Por favor preencha os campos abaixo!')

    } else {
       dadosInput.innerHTML = `Nome do time: <strong>${timeVolei.nome}</strong>`
        dadosInput.innerHTML += `<br>Pontuação antes do último jogo: <strong>${timeVolei.ultimaPontuacao}</strong>`
        dadosInput.innerHTML += `<br>Sets que o <strong>${timeVolei.nome}</strong> fechou no último jogo: <strong>${timeVolei.setFechado}</strong>`
        dadosInput.innerHTML += `<br>Sets que o time adversário fechou no último jogo: <strong>${timeVolei.setAdversário}</strong>` 
    } 
    
    setFechados()
    nomeTime.focus()
})

//função para cacular a pontuação
calcularPontuacao.addEventListener('click', function(){

    //quando o time ganha ponto:
    //3x0 = 3
    //3x1 = 3
    //3x2 = 2
    //2x3 = 1
    if(timeVolei.setFechado == 3 && timeVolei.setAdversário == 0 || timeVolei.setFechado == 3 && timeVolei.setAdversário == 1){
        timeVolei.pontuacaoAtual = timeVolei.ultimaPontuacao + 3
    
        nomeTime.value = ''
        ultimaPontuacao.value = ''
        setTime.value = ''
        setTimeAdversario.value = ''
        
        exibirResultadoP.innerHTML = `Nome do time: <strong>${timeVolei.nome}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação antes do último jogo: <strong>${timeVolei.ultimaPontuacao}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o <strong>${timeVolei.nome}</strong> fechou no último jogo: <strong>${timeVolei.setFechado}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o time adversário fechou no último jogo: <strong>${timeVolei.setAdversário}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação total atualmente: <strong>${timeVolei.pontuacaoAtual}</strong>`
    } 
    
    else if (timeVolei.setFechado == 3 && timeVolei.setAdversário == 2){
        timeVolei.pontuacaoAtual = timeVolei.ultimaPontuacao + 2
    
        nomeTime.value = ''
        ultimaPontuacao.value = ''
        setTime.value = ''
        setTimeAdversario.value = ''
        
        exibirResultadoP.innerHTML = `Nome do time: <strong>${timeVolei.nome}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação antes do último jogo: <strong>${timeVolei.ultimaPontuacao}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o <strong>${timeVolei.nome}</strong> fechou no último jogo: <strong>${timeVolei.setFechado}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o time adversário fechou no último jogo: <strong>${timeVolei.setAdversário}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação total atualmente: <strong>${timeVolei.pontuacaoAtual}</strong>`
    }

    else if (timeVolei.setFechado == 2 && timeVolei.setAdversário == 3){
        timeVolei.pontuacaoAtual = timeVolei.ultimaPontuacao + 1
    
        nomeTime.value = ''
        ultimaPontuacao.value = ''
        setTime.value = ''
        setTimeAdversario.value = ''
        
        exibirResultadoP.innerHTML = `Nome do time: <strong>${timeVolei.nome}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação antes do último jogo: <strong>${timeVolei.ultimaPontuacao}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o <strong>${timeVolei.nome}</strong> fechou no último jogo: <strong>${timeVolei.setFechado}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o time adversário fechou no último jogo: <strong>${timeVolei.setAdversário}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação total atualmente: <strong>${timeVolei.pontuacaoAtual}</strong>`
    }

    //não ganha ponto
    //0x3
    //1x3
    else if (timeVolei.setFechado == 0 && timeVolei.setAdversário == 3 || timeVolei.setFechado == 1 && timeVolei.setAdversário == 3){
        timeVolei.pontuacaoAtual = timeVolei.ultimaPontuacao + 0
    
        nomeTime.value = ''
        ultimaPontuacao.value = ''
        setTime.value = ''
        setTimeAdversario.value = ''
        
        exibirResultadoP.innerHTML = `Nome do time: <strong>${timeVolei.nome}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação antes do último jogo: <strong>${timeVolei.ultimaPontuacao}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o <strong>${timeVolei.nome}</strong> fechou no último jogo: <strong>${timeVolei.setFechado}</strong>`
        exibirResultadoP.innerHTML += `<br>Sets que o time adversário fechou no último jogo: <strong>${timeVolei.setAdversário}</strong>`
        exibirResultadoP.innerHTML += `<br>Pontuação total atualmente: <strong>${timeVolei.pontuacaoAtual}</strong>`
    }
    nomeTime.focus()
})

//função para limpar tabela
limparTabela.addEventListener('click', function(){
    nomeTime.value = ''
    ultimaPontuacao.value = ''
    setTime.value = ''
    setTimeAdversario.value = ''
    
    exibirResultadoP.innerHTML = ``
    exibirResultadoP.innerHTML += ``
    exibirResultadoP.innerHTML += ``
    exibirResultadoP.innerHTML += ``
    exibirResultadoP.innerHTML += ``

    dadosInput.innerHTML = ``
    dadosInput.innerHTML += ``
    dadosInput.innerHTML += ``
    dadosInput.innerHTML += ``
    dadosInput.innerHTML += ``

    nomeTime.focus()
})

//função para verificar os sets
//3x0
//0x3
//3x1
//1x3
//3x2
//2x3
function setFechados(){
    if(timeVolei.setFechado < 3 && timeVolei.setAdversário < 3 ){
        alert('[ERRO] Confira os sets. Lembre-se, os sets precisam ser fechados até 3')
        dadosInput.innerHTML = ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
    } 
    else if (timeVolei.setFechado > 3 || timeVolei.setAdversário > 3){
        alert('[ERRO] Confira os sets. Lembre-se, os sets só podem ser fechados até 3')
        dadosInput.innerHTML = ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
    }
    else if (timeVolei.setFechado == 3 && timeVolei.setAdversário == 3){
        alert('[ERRO] Confira os sets. Lembre-se, apenas um time fecha os 3 sets')
        dadosInput.innerHTML = ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
        dadosInput.innerHTML += ``
    }
}




