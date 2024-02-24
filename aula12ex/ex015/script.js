function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('Verifique os dados inseridos')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')                                                  
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-M.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-M.jpg')
            } else if (idade < 90){
                //adulto
                img.setAttribute('src', 'adulto-M.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso-M.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-F.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'jovem-F.jpg')
                //jovem
            } else if (idade < 90){
                img.setAttribute('src', 'adulto-F.jpg')
                //adulto
            } else{
                img.setAttribute('src', 'idoso-F.jpg')
                //idoso
            }
        }
        res.innerHTML= `Detectamos um(a) ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}