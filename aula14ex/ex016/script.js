function contar(){
    var ini = document.getElementById('num_in')  
    var fim = document.getElementById('num_fim')
    var pas = document.getElementById('num_pas')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert("[ERRO] Faltam dados")
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML= 'Contando..'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(i < f){
            for(var c = i; c <= f; c+= p){
            res.innerHTML += `${c}&#128073`
        }
        
        }else{
            for(var c = i; c >= f; c-= p){
                res.innerHTML += `${c}&#128073`
            }
        }
        res.innerHTML += '&#127988;'
    }
    
}