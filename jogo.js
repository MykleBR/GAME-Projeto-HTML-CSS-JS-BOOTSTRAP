var largura = 0
var altura = 0
var vidas = 1
var tempo = 15
var criaMoscaTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil'){
    var criaMoscaTempo = 1500
} else if (nivel === 'normal'){
    var criaMoscaTempo = 1000
} else if(nivel === 'dificil'){
    var criaMoscaTempo = 500
} else if(nivel === 'Chuck Norris')
    var criaMoscaTempo = 250

// Função para prever redimensionamentos de tela pra setar o espaço jogavel.
function ajusta_campo_de_jogo() {
    var largura = window.innerWidth
    var altura = window.innerHeight
    return [largura, altura]
}

var fdp = ajusta_campo_de_jogo()
largura = fdp[0]
altura = fdp[1]

var cronometro = setInterval(function (){
    tempo -=1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(mosca)
        window.location.href="win.html"
    } else{
        document.getElementById('timer').innerHTML = tempo
        }
    },1000)
    
// Função que posiciona de forma randomica o elemento Mosca na tela.
function posicao_randomica() {
    
    //remove mosquito caso exista
    if (document.getElementById('mosca')){
        document.getElementById('mosca').remove()
        if (vidas > 3){
            window.location.href="gameover.html"
        } else{
            document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * (largura) -90)
    var posicaoY = Math.floor(Math.random() * (altura) -90)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoMosca() +' '+lado_aleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    document.body.appendChild(mosca)
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }
}

// Função para determinar o tamanho do item Mosca
function tamanhoMosca() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

// Alteração do lado da mosca por questões de estetica
function lado_aleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'LadoB'
    }
}







    

