function carregar() {

    var data = new Date()
    var hoje = data.getFullYear()
    var nasc = document.getElementById('iano')
    var idade = hoje - nasc.value
    var texto = document.getElementById('saida')
    var foto = document.createElement('img')
    foto.setAttribute('id', 'img')
    var sex = document.getElementsByName('sexo')
    var genero = ''

    if (sex[0].checked){
        genero = 'Homem'
    }else{
        genero = "Mulher"
    }
    
    if (iano.value.length == 0 || iano.value > hoje){
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        if (genero == 'Homem'){
            if (idade >= 0 && idade<= 10){
                foto.src = 'bebe_h.png'
            }else if (idade < 35){
                foto.src = 'jovem_h.png'
            }else if (idade < 65){
                foto.src = 'adulto_h.png'
            }else {
                foto.src = 'idoso_h.png'
            }
        }else {
            if (idade >= 0 && idade<= 10){
                foto.src = 'bebe_m.png'
            }else if (idade < 35){
                foto.src = 'jovem_m.png'
            }else if (idade < 65){
                foto.src = 'adulto_m.png'
            }else {
                foto.src = 'idoso_m.png'
            }
        }
        texto.style.textAlign = 'center'
        texto.innerHTML = `Detectamos ${genero} de ${idade} anos. <br>` 
        texto.appendChild(foto)
    }

    


}