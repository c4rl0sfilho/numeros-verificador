'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosTriplo = document.getElementById('botao-mostrar-numeros-triplo')
const botaoMostrarNumerosImpar = document.getElementById('botao-mostrar-numeros-impar')
const botaoMostrarNumeros3e5 = document.getElementById('botao-mostrar-numeros-3e5')
const botaoMostrarNumeros3ou5 = document.getElementById('botao-mostrar-numeros-3ou5')

function mostarNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[i]
        container.appendChild(novoSpan)
    }
}
function mostarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if(numeros[i]% 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }
}
function mostarNumerosTriplo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-triplo')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
            numeros[i] = numeros[i] * 3
            const novoSpan  = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        
    }
}
function mostarNumerosImpar(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-impar')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if(numeros[i]% 2 != 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
    }
}
function mostarNumeros3e5(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-3e5')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if (numeros[i]% 3 == 0 && numeros[i]% 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
            
        
    }
}
function mostarNumeros3ou5(){
    const numeros = document.getElementById('numeros').value.split(',')
    const ultimoI = numeros.length
    const container = document.getElementById('container-mostrar-numeros-3ou5')

    container.replaceChildren('')
    for(let i=0; i < ultimoI; i++){
        if (numeros[i]% 3 == 0 || numeros[i]% 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[i]
            container.appendChild(novoSpan)
        }
            
        
    }
}

botaoMostrarNumeros.addEventListener('click', mostarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostarNumerosPares)
botaoMostrarNumerosTriplo.addEventListener('click', mostarNumerosTriplo)
botaoMostrarNumerosImpar.addEventListener('click', mostarNumerosImpar)
botaoMostrarNumeros3e5.addEventListener('click', mostarNumeros3e5)
botaoMostrarNumeros3ou5.addEventListener('click', mostarNumeros3ou5)