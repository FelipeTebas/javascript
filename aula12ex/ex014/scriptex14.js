function carregar () {
    var texto = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manhã.png'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
    }else {
        img.src = 'noite.png'
    }
}

