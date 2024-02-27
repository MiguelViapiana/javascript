let txtnum = document.getElementById("txtnum")
let num = []
let res = document.getElementById('res')
let tab = document.getElementById("selnum")
function adicionar(){  
    if(txtnum.value.length == 0){
        window.alert("[ERRO] Digite um número")
        return;
    }
    let tnum = Number(txtnum.value)
    if(tnum < 1 || tnum > 100){
        window.alert("Insira um número entre 1 a 100!")
    }else{
        if(num.indexOf(tnum) == -1){
        num.push(tnum)
        let item = document.createElement('option')
        item.text = `Valor ${tnum} adicionado`
        tab.appendChild(item)
    }else{
        window.alert('Número ja adicionado')
        }
    }
}
function finalizar(){
    res.innerHTML = ''
    comprimentoNum(num)
    maiorNum(num)
    menorNum(num)
    somaNum(num)
    mediaNum(num)
}
function comprimentoNum(num){
    return res.innerHTML += `Ao todo, temos ${num.length} número(s) cadastrado(s)`
}
function maiorNum(num){
    let maior_num = num[0]
    for(let pos in num){
        if(maior_num < num[pos]){
            maior_num = ''
            maior_num = num[pos]
        }
    }
    return res.innerHTML += `<p>O maior valor informado foi ${maior_num}</p>`
}
function menorNum(num){
    let menor_num = num[0]
    for(let pos in num){
        if(num[pos] < menor_num){
            menor_num = ''
            menor_num = num[pos]
        }
    }
     return res.innerHTML += `<p>O menor valor informado foi ${menor_num}</p>`
}
function somaNum(num){
    let soma_num = 0
    for(let pos in num){
        soma_num += num[pos]
    }
    return res.innerHTML += `<p>A soma dos valores foi ${soma_num}</p>`
}
function mediaNum(num){
    let soma_num = 0
    for(let pos in num){
        soma_num += num[pos]
    }
    return res.innerHTML += `<p>A média dos valores foi de ${soma_num/num.length}</p>`  
}      