let numero  = document.getElementById('numero')
let select = document.getElementById('sele')
let resultado = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
} else {
    return false
}
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){ //-1 significa que o vetor não tem número informado.
        return true
    } else {
        return false
    }
}

function adicionar () {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) { //&& somente true com true.
        valores.push(Number(numero.value)) //push 'adicionar valor aos vetores' linha 4.
        let item = document.createElement('option') //Cria elemento no select.
        item.text = `Valor ${numero.value} adicionado!` //texto que vai na caixa.
        select.appendChild(item) //comando para fica visível no select.
        resultado.innerHTML = '' // Assim que add o valor da linha 27, esse comando limpa o resultado.
    }else{
        window.alert('valor já adicionado')
    }
    numero.value = '' // apaga o último número digitado na caixa.
    numero.focus() //o mouse sempre fica posicionado dentro da caixa, facilitando a digitação.
}

function finalizar () {
    if(valores.length === 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores) { //pos-> posição da chave no array.
            soma += valores[pos] //concatenação. 
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total

        resultado.innerHTML = '' //recebe vazio.
        resultado.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
        resultado.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        resultado.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}