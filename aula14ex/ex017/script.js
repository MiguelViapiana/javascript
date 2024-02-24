function tabuada(){
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if(txtnum.value.length == 0){
        window.alert('[ERRO] insira um número')
    }else{
        tab.innerHTML = ''
        var num = Number(txtnum.value)
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}