function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var p_msg = window.document.getElementById('p_msg')
    var data = new Date()
    var hora = data.getHours()

    var min = data.getMinutes()

    if(hora >= 0 && hora < 12){
        img.scr = 'foto-manha.jpg'
        document.body.style.background = '#e88617'
        msg.innerHTML = `Agora são ${hora}:${min} da manhã`
        p_msg.innerHTML = 'Bom dia!'

    }else if (hora >= 12 && hora < 18){
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b6c1c5'
        msg.innerHTML = `Agora são ${hora}:${min} da tarde`
        p_msg.innerHTML = 'Boa tarde!'
        
    } else {
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#a07db5'
        msg.innerHTML = `Agora são ${hora}:${min} da noite`
        p_msg.innerHTML = 'Boa noite!'
    }
}

