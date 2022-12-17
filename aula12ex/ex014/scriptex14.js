function carregar () {
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12){
        img.src = 'manhã.png'
        texto.innerHTML = `Agora são ${hora} horas, bom dia.`
        document.body.style.background = 'rgb(236, 217, 106)'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        texto.innerHTML = `Agora são ${hora} horas, boa tarde.`
        document.body.style.background = 'rgb(201, 146, 64)'
    }else {
        img.src = 'noite.png'
        texto.innerHTML = `Agora são ${hora} horas, boa noite.`
        document.body.style.background = 'rgb(71, 69, 150)'
    }
}

